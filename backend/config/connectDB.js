const mongoose = require('mongoose')
const config = require('./config.json')

const connectDB = async () => {
    try {
        mongoose.connect(config.connectionString);
        console.log("Connected to the database");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = connectDB;
