const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const todoHandler = require('./todoHandler/todoHandler')


dotenv.config({ path: './config/config.env' })

connectDb();

const app = express();
app.use(express.json())

app.use('/todo',todoHandler)
const port = process.env.PORT || 6000

app.listen(port, (req, res) => {
    console.log(`server is running in ${port}`)
})