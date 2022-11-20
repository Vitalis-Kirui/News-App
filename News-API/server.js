const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-routes')
const config = require('./config/config-variables')
const commentsRoutes = require('./routes/comment-routes');

const app = express();

// Using cors
app.use(cors());

// Using body parser
app.use(bodyParser.json());

// Connecting to database
mongoose.connect(config.dbConnection)
        .then((results) =>{
            console.log('Database connection successfully established')
            app.listen(3000);
        })
        .catch((error) =>{
            console.log(error);
        })

// Listening for requests
app.get('' , (req, res) =>{
    res.send('Hello from server');
})

// using authentication routes
app.use('/authentication' , userRoutes);

// Using comments routes
app.use('/comments', commentsRoutes);