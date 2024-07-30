const express = require('express')
const taskModel = require('./models/task_model.js');
const router = express.Router()


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/task', function (req, res) {
    const search = req.query;
    console.log(search.title);
    const tasks = taskModel.getAllTasks(search.title);
    res.status(200).json({ success: true, data: tasks });;
});

router.get('/task', function (req, res) {
    const search = req.query;
    console.log(search.title);
    const tasks = taskModel.getAllTasks(search.title);
    res.status(200).json({ success: true, data: tasks });;
});

router.get('/task/:id', (req, res) => {
    const task = taskModel.show(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
});

router.post('/task', (req, res) => {
    const task = taskModel.store(req.body)
    res.status(200).json({ success: true, data: task });
});

router.delete('/task/:id', (req, res) => {
    const task = taskModel.destroy(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message:` can't find any task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, message: "task was deleted successfully" });
})

router.put('/task/:id', (req, res) => {
    const task = taskModel.update(parseInt(req.params.id), req.body);
    if (!task) {
        res.status(404).json({ success: false, message:` can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

router.put('/updateStatus/:id',(req,res)=>{
    const task = taskModel.updateStatus(parseInt(req.params.id),req.body);
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, data: task });
})

router.put('/task/isComplete/:id',(req,res)=>{
    const task = taskModel.isCompleted(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

router.put('/task/isNotComplete/:id',(req,res)=>{
    const task = taskModel.isNotComplete(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message: `can't find any task with ID ${req.params.id}` })
    }
    res.status(200).json({ success: true, data: task });
})

router.get('/listTaskCompleted',(req, res) => {
    const task = taskModel.listTaskCompleted();
    res.status(200).json({ success: true, data: task });
})

module.exports = router