const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
const db_url = process.env.URL_DB;

mongoose
    .connect(db_url, {
        dbName: 'lingua-nova_db'
    })
    .then(() => {
        console.log('database connected successfully')
    })
    .catch((err) => {
        console.log('database connection error', err)
    })

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})