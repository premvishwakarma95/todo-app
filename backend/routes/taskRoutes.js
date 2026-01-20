const express = require('express');
const {addTask, fetchTask} = require('../controllers/taskController');

const router = express.Router();

router.post('/add-task', addTask);
router.get('/get-task', fetchTask);

module.exports = router;
