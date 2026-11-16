const dns = require("dns");
const { MongoClient } = require("mongodb");
const express = require("express");

dns.setServers(["8.8.8.8"]);

const app = express();

const client = new MongoClient(
    "mongodb+srv://prasharaadit_db_user:Aadit2112@cluster0.vvuwsti.mongodb.net/?appName=Cluster0"
);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("You successfully connected to MongoDB!");
    } catch (err) {
        console.log("MongoDB connection failed:");
        console.log(err);
    }
}

connectToMongoDB();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});