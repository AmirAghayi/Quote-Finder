require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const path = require('path');





const app = express();

//database connection

massive(process.env.DB_CONNECTION_STRING, { scripts: __dirname + '/db' })
    .then(dbInstance => {
        console.log('Connected to the db');
        app.set('db', dbInstance);
    }).catch(e => {
        console.log(e);
    })


//authentication

passport.use('register', new LocalStrategy({
    passReqToCallback: true,
}, (req, username, password, done) => {
    const db = app.get('db');
    const { firstName, lastName, emailAddress, phoneNumber } = req.body;

    db.query(`
                select * from "Users"
                where email_address ilike \${emailAddress}
                    OR username ilike \${username}
            `, { firstName, lastName, emailAddress, phoneNumber, username })
        .then(users => {
            if (users.length > 0) {
                return done('Username or email is already in use');
            }

            bcrypt.hash(password, 15, (err, hashedPassword) => {
                if (err) {
                    return done('System failure');
                }
                db.Users.insert({
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phoneNumber,
                    email_address: emailAddress,
                    username,
                    password: hashedPassword,
                })
                    .then(user => {
                        delete user.password;

                        done(null, user);
                    })
                    .catch(err => {
                        console.warn(err);
                        done('System failure');
                    });
            });
        })
        .catch(err => {
            console.warn(err);
            done('System failure');
        });
}
)
);


passport.use('login', new LocalStrategy((username, password, done) => {
    const db = app.get('db');

    db.Users.find({ username })
        .then(users => {
            if (users.length == 0) {
                return done('Username or password is incorrect');
            }

            const user = users[0];

            bcrypt.compare(password, user.password, (err, isSame) => {
                if (err) {
                    return done('System failure');
                }

                if (!isSame) {
                    return done('Username or password is incorrect');
                }

                delete user.password;

                done(null, user);
            });
        })
        .catch(err => {
            console.warn(err);
            done('System failure');
        });
}
)
);


// if a strategy authenticates successfully (i.e., "done(null, user)"), it passes the user into the function you put here and the result of calling "done"
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const db = app.get('db');

    db.Users.find(id)
        .then(user => {
            if (!user) return done(null, undefined);

            delete user.password;

            return done(null, user);
        })
        .catch(err => {
            console.warn(err);
            done('System failure');
        });
});




app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
}));
app.use(passport.initialize());
app.use(passport.session());



app.post('/register', passport.authenticate('register', { failWithError: true }), (req, res) => {
    res.send({ message: 'Successfully registered', user: req.user });
}, (err, req, res, next) => {

}
);


app.post('/login', passport.authenticate('login'), (req, res) => {
    res.send({ message: 'Successfully logged in', user: req.user });
}, (err, req, res, next) => {

}
);


app.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});



let {
    DB_CONNECTION_STRING,
    PORT
} = process.env;





// endpoints


app.get('/api/me', (req, res) => {
    res.send(req.user)
})




app.get('/api/userCreatedQuotes', (req, res) => {
    const db = req.app.get('db');

    db.get_usercreatedquotes()
        .then(response => {
            res.status(200).send(response);
        }).catch((err) => {
            console.log('getuserceatedquotes:', err)
        });
});


app.get('/api/quotes/:id', (req, res) => {
    const db = req.app.get('db');
    console.log(req.params)
    db.Quotes.find(req.params.id)
        .then(response => {
            res.status(200).send(response);
        }).catch((err) => {
            console.log('getuserceatedquotes:', err)
        });
});





app.get('/api/comments', (req, res) => {
    const db = req.app.get('db');

    db.get_comments([req.query.quote_id])
        .then(response => {
            res.status(200).send(response);
        }).catch((err) => {
            console.log('getcomments:', err)
        });

});



app.post('/api/quote', (req, res) => {
    const { quotebody, author, topic } = req.body;
    const db = req.app.get('db');

    db.create_quotes([quotebody, author, topic])
        .then(response => {
            res.status(200).send('Submitted');
        }).catch(err => {
            console.log('createQuote', err)
        });
});



app.post('/api/comment', (req, res) => {
    const { commentBody, quoteId } = req.body;
    const db = req.app.get('db');

    db.create_comment([commentBody, quoteId, req.user.id])
        .then(response => {
            return db.get_comments([quoteId])
        })
        .then(comments => {
            res.status(200).send(comments);
        }).catch(err => {
            console.log('createQuote', err)
        });
})




app.delete(`/api/comments/:id`, (req, res) => {
    let { id } = req.params;
    console.log(id)

    req.app.get('db').delete_comment([id])
        .then(() => {
            res.status(200).send({ message: 'Deleted successfully!' });
        }).catch(err => {
            res.status(500).send(err);
            console.log(err);
        });
});

// app.get('/api/books', (req, res) => {
//     let { topic, author } = req.query 
//     let searchObj = {}
//     if(topic) searchObj.topic = topic
//     if(author) searchObj.author = author
//     db.books.find(searchObj)
// })

app.patch('/api/comments/:id', (req, res) => {
    let { id } = req.params;
    let { commentBody } = req.body;

    req.app.get('db').edit_comments([commentBody, id])
        .then((comments) => {
            res.status(200).send(
                comments[0]
            );
        }).catch(err => {
            res.status(500).send(err);
            console.log(err);
        });
});



app.get('/api/quotes/topic/:topic', (req, res) => {
    let { tag } = req.params;
    console.log("search", req.params)
    req.app
        .get('db')
        .get_quotes_by_topic(topic)
        .then(quote => {
            res.status(200).send(quote);
        })
        .catch(err => {
            console.log({ err });
            res.status(500).send(err);
        });
});


app.get('/api/quotes/author/:author', (req, res) => {
    console.log("search", req.params)
    let { author } = req.params;
    req.app
        .get('db')
        .get_quotes_by_author(author)
        .then(quote => {
            res.status(200).send(quote)
            console.log(quote);
        })
        .catch(err => {
            console.log({ err });
            res.status(500).send(err);
        });
});


app.use(express.static(__dirname + '/../build'));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});




app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})




