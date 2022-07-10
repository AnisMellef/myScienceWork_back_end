const express = require('express');
const DBconnection = require('./config/DBconnection');
const userRoute = require('./route/user');
const publicationRoute = require('./route/publication');
const cors = require('cors');
require('dotenv').config();


const port = process.env.PORT;

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

DBconnection();

app.use('/api', userRoute);
app.use('/api', publicationRoute);



app.listen(port, (err) => {
    err ? console.log(err) : console.log(`you are connected to the server go to port ${port}`);
})