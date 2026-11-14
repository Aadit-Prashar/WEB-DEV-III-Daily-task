
const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['1.1.1.1', '8.8.8.8']);

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.log("MongoDB Error:", err.message);
        throw err;
    }
}

module.exports = connectDB;
