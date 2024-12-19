const express = require('express');
const bodyParser = require('body-parser');
const app = express();
 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public')); 
 

let tasks = [];
 
// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
 
app.post('/add', (req, res) => {
    const task = req.body.task;
    if (task) tasks.push(task); 
    res.redirect('/'); 
});
 
app.post('/delete', (req, res) => {
    const taskIndex = parseInt(req.body.taskIndex);
    if (taskIndex >= 0) tasks.splice(taskIndex, 1); 
    res.redirect('/'); 
});
 
app.get('/tasks', (req, res) => {
    res.json(tasks); 
});
 
// Start server
const PORT = 3000;
app.listen(PORT, () => 
console.log('server running..'))