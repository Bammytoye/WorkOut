const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./Routes/Workout');
const mongoose = require('mongoose');
const cors = require('cors');

// Express app
const app = express();

// Middleware
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/Workout', workoutRoutes); 

// Connect to the database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        // Running for Request
        app.listen(process.env.PORT, () => {
            console.log('Connecting to Db & Running on Port 5010!');
        });
        // Listen to the request
    })
    .catch((error) => {
        console.log(error, 'Error connecting to db');
    });
