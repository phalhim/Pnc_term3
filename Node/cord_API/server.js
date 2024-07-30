const express = require('express');
const taskModel = require('./models/task_model.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/task', (req, res) => {
    const tasks = taskModel.getAlltask()
    res.send(tasks);
})

app.get('/task/:id', (req, res) => {
    const tasks = taskModel.show(parseInt(req.params.id))
    res.send(tasks);
})

app.post('/task/:id', (req, res) => {
    const tasks = taskModel.store(req.body);
    res.send(tasks);

})

app.delete('/task/:id', (req, res) => {
    const tasks = taskModel.destory(parseInt(req.params.id));
    res.send(tasks);
})

app.put('/task/:id', (req, res) => {
    const tasks = taskModel.update(parseInt(req.params.id), req.body);
    res.send(tasks);
})
const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});