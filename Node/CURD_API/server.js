const express = require('express');
const taskModel = require('./models/task_model.js');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/task', (req, res) => {
    const task = taskModel.getAllTask()
    res.send(task)
})

app.get('/task/:id', (req, res) => {
    const task = taskModel.show(parseInt(req.params.id))
    res.send(task)
})

app.post('/task/:id', (req, res) => {
    const task = taskModel.store(req.body);
    res.send(task)
})



const port = 3000;
app.listen(port, () => { 'server running : ' + port })