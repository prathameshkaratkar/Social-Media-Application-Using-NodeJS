const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet  = require('helmet');
const morgan = require('morgan');


dotenv.config();

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    .then(() => console.log("Database connection established"))
    .catch((err) => console.log("Database connection error"))


//!middleware
app.use(express.json());
app.use(helmet());
app.use(morgan());


//! Testing the nodejs server is running or not.
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})