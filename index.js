
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

// Routes
const tourRoutes = require('./Routes/tourRoutes');
const userRoutes = require('./Routes/userRoutes');

app.use('/api/auth', userRoutes);
app.use('/api', tourRoutes);

const PORT = 3000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, '127.0.0.1', () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch (err) {
        console.log("Server startup failed:", err.message);
    }
};

startServer();

