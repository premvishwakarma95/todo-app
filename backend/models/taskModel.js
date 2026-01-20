const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('task', taskSchema);