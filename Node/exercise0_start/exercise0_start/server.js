const express = require('express');
const bodyParser = require('body-parcher');
const app = express();
app.use(bodyParser.json());
let user = [{Id:null,firstname:null,lastname:null,age:null}];

// Get all User Data
app.get('/users',(req,res)=>{
  res.json(user);
})

// Get User by Id
app.get('/users/:id',(req,res)=>{
  const userId = parseInt(req.params.id);
  const user = user.find(user=>user.id === userId);
  if(user){
    res.json(user);
  }else{
    res.status(400).json({
      message:'User is not found'
    });
  }
});

//create Method
app.post('/users' , (req , res)=>{
  const newUser = req.body;
  newUser.id = user.length + 1;
  user.push(newUser);
  res.status(201).json({message:'User created successfully',user:newUser});
})



//Edit Function 
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
        users[index] = { ...users[index], ...updateUser };
      res.json({ message: 'User updated successfully', user: users[index] });
  } else {
      res.status(404).json({ message: 'User not found' });
  }
});



// Delete Function 
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = user.findIndex(user=> user.id === userId);

    if(index !== -1){
      user.splice(index,1);
      res.json({message:'User deleted successfully'});

    }else{
      res.status(400).json({message:'User not found'});
    }
});



