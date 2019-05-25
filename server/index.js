const express = require ('express');
const massive = require ('massive');
const cors = require ('cors');
const bodyParser = require ('body-parser');
require ('dotenv').config({ path: __dirname + '/.env'});
const controller = require ('./controller');




const app = express();


massive(process.env.DB_CONNECTION_STRING, {scripts: __dirname + 'db'})
.then(dbInstance => {
    console.log('Connected to the db');
    app.set('db', dbInstance);
}).catch(e => {
    console.log(e);
})



app.post("/register", controller.newUser)




app.use(cors());
app.use(bodyParser.json());


let {
    DB_CONNECTION_STRING,
    PORT
} = process.env;








app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}` )
})




