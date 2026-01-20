const tasks = require('../models/taskModel');

const addTask = async (req, res) => {
    try {
        const {name, description} = req.body;
        if(!name || !description) {
            res.status(400).json({success: false, error: 'please provide all value'});
        }

        const task = await tasks.create(req.body);

        res.status(200).json({success: true, message: 'Task added successfully', task});
    } catch (error) {
        res.status(500).json({success: false, message: 'server error'});
    }
}

const fetchTask = async (req, res) => {
    try {
        
        const task = await tasks.find();

        res.status(200).json({success: true, message: 'Task fetched successfully', task});
    } catch (error) {
        res.status(500).json({success: false, message: 'server error'});
    }
}


module.exports = {addTask, fetchTask}