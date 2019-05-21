const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
require ('dotenv').config({ path: __dirname + '/.env'});




const app = express();

app.use(cors());
app.use(bodyParser.json());


let {
    DB_CONNECTION_STRING,
    PORT
} = process.env;








app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}` )
})




