const express = require('express');
const taskModel = require('./models/task_model');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//run html of js
app.use(express.static("public"))

app.get('/task', function (req, res) {
    const search = req.query;
    console.log(search.title);
    const tasks = taskModel.getAllTasks(search.title);
    res.status(200).json({ success: true, data: tasks });;
});

app.get('/task/:id', (req, res) => {
    const task = taskModel.show(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
});

app.post('/task', (req, res) => {
    const task = taskModel.store(req.body)
    res.status(200).json({ success: true, data: task });
})

app.delete('/task/:id', (req, res) => {
    const task = taskModel.destroy(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, message: "task was deleted successfully" });
})

app.put('/task/:id', (req, res) => {
    const task = taskModel.update(parseInt(req.params.id), req.body);
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

app.put('/updateStatus/:id',(req,res)=>{
    const task = taskModel.updateStatus(parseInt(req.params.id),req.body);
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

app.put('/task/isComplete/:id',(req,res)=>{
    const task = taskModel.isCompleted(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

app.put('/task/isNotComplete/:id',(req,res)=>{
    const task = taskModel.isNotComplete(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

app.get('/listTaskCompleted',(req, res) => {
    const task = taskModel.listTaskCompleted();
    res.status(200).json({ success: true, data: task });
})


const port = 3000;
app.listen(port, () => {
    console.log('Server run port:' + port);
});
