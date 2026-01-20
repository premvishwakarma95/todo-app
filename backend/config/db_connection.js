const mongoose = require('mongoose');

const connectDB = async (db_url) => {
    try {
        const connection = await mongoose.connect(db_url);
        if(connection) {
            console.log('db connected successfully');
        }
    } catch (error) {
        console.log(error.message || 'db not connected');
    }
}

module.exports = connectDB;