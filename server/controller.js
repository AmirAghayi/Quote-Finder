module.exports = {
    newUser: (req,res) => {
        const {firstName,lastName,emailAddress,phoneNumber,username,password} = req.body;
        const db = req.app.get('db')

        db.create_user([firstName,lastName,emailAddress,phoneNumber,username,password])
        .then( response => {
            res.status(200).send('User Added');
        }).catch((err) => {
            console.log('newUser', err)
            res.status(500).send('Server Error!')
        })

    },






}