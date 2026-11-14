const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(
            'mongodb+srv://prasharaadit_db_user:Aadit2112@cluster0.vvuwsti.mongodb.net/tours_and_travels'
        );

        console.log("MongoDB connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

connectDB();
