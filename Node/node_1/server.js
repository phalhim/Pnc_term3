const express = require('express');
const taskModel = require('./models/task_model.js');
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/task',(req,res)=>{
  const tasks = taskModel.getAlltask();
  res.status(200).json({success:true,data:tasks})
})

app.get('/task/:id',(req,res)=>{
  const task=taskModel.show(parseInt(req.params.id));
  if(!task){
    res.status(404).json({success:false,message:"Task not found"})
  }
  res.status(200).json({success:true,data:task})
})

app.delete('/taask/:id',(req,res)=>{
  const task=taskModel.destroy(parseInt(req.params.id));
  if(!task){
    res.status(404).json({success:false,message:"Task not found"})
  }
})
app.post('/task',(req,res)=>{
  const task=taskModel.store(req.body);
  res.status(200).json({success:true,data:task})
})




const port = 3000;
app.listen(port, ()=> {
  console.log('Example app listening on port: ' + port);
})
