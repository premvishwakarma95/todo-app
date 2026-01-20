const express = require('express');
require('dotenv').config();
const connctDB = require('./config/db_connection');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/task', taskRoutes);

connctDB(process.env.DB_URL);

app.get('/', (req, res) => {
    res.send('app working');
})

app.listen(process.env.PORT, () => {
    console.log('app is runningon port ' + process.env.PORT)
})