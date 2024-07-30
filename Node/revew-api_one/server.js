const express = require('express')
// stiore file models
const taskModel = require('./models/models.js')

const app = express()

// function json model
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// show tasks
app.get('/task', function (req, res) {
    const search = req.query;
    console.log(search.title);
    const tasks = taskModel.getAllTasks(search.title);
    // task successfully
    res.status(200).json({success: true, data: tasks});
    // res.send(tasks);
})


// call tasks id
app.get('/task/:id', (req, res)=>{
    const task = taskModel.showTask(parseInt(req.params.id));
    // alert message this task
    if(!task){
        res.status(404).json({success: false, message: `can't find any task with ID ${req.params.id}`});
    }
    // res.send(task);
    res.status(200).json({success: true, data: task});
})


// delete tasks
app.post('/task',(req, res)=>{
    const tasks = taskModel.getAllTasks.store(req.body);
    res.status(200).json({success: true, data: tasks})
    // res.send(tasks);
})

app.delete('/task/:id', (req, res)=>{
    //  parses a string and returns an integer(parseInt)
    const task = taskModel.destroy(parseInt(req.params.id));

    // alert message when task is deleted
    if(task){
        res.status(200).json({success: true, message: `task was successfully deleted`});
    }else{
        res.status(404).json({success: false , message: `can't find any task with ID ${req.params.id}`});
    }
    // res.send(task);
   
})




// update tasks
app.put('/task/:id', (req,res) => {
    // we can update of body it saver on the file
    const task = taskModel.update(parseInt(req.params.id), req.body);
    // alert message when task is updated
    if(!task){
        res.status(404).json({success: false, message: `can't find any task with ID ${req.params.id}`});
    }

    //update tasks successfully
    res.status(200).json({success: true, data: task});
    
    // res.send(task);
    
})

//================================================================================

app.put('/update_status/:id',(req,res)=>{
    const task = taskModel.updateStatus(parseInt(req.params.id),req.body);
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})


//================================================================================
app.put('/task/isCompleted/:id', (req,res) => {
    const task  = taskModel.isCompleted(parseInt(req.params.id),req.body);
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

app.put('/task/isNotCompleted/:id', (req,res) => {
    const task  = taskModel.isCompleted(parseInt(req.params.id),req.body);
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

// get all completed tasks true
app.get('/listTasksCompleted', (req,res) => {
    const task  = taskModel.listTasksCompleted();
    res.status(200).json({ success: true, data: task });
})

// get all completed tasks false
app.get('/listNotTasksCompleted', (req,res) => {
    const task  = taskModel.listNotTasksCompleted();
    res.status(200).json({ success: false, data: task });
})



// create tasks on body
app.post('/tasks', (req, res) => {
    const task = taskModel.store(req.body)
    res.send(task);
})


// port tasks
const port = 3000;
app.listen(port, () => {
    console.log('Server run port:' + port);
})  