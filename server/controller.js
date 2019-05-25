module.exports = {
    newUser: (req,res) => {
        const {firstName,lastName,emailAddress,phoneNumber,username,password} = req.body;
        const db = req.app.get('db')

        db.create_user([first_name,last_name,email_address,phone_number,username,password])
        .then( response => {
            res.status(200).send('User Added');
        }).catch((err) => {
            console.log('newUser', err)
        })

    },






}