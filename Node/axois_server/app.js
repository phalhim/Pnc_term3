const express = require('express');
const app = express();



let users = [
    {
        id: 1,
        name: "Rady",
        age: 29,
        email: "rady@example.com"
    },
    {
        id: 2,
        name: "Him",
        age: 25,
        email: "him@example.com"
    },
    {
        id: 3,
        name: "Yon",
        age: 25,
        email: "Yon@example.com"
    },
    {
        id: 4,
        name: "Mengheang",
        age: 23,
        email: "mengheangn@example.com"
    },
    {
        id: 5,
        name: "Rady",
        age: 20,
        email: "rady.boy@example.com"
    }
];

app.get('/',(req,res)=>{
    res.send({message:'Welcome API'})
})


app.get('/users', (req,res)=>{
    res.send(users)
})

app.get('/user/:id', (req,res)=>{
    let id = req.params.id;
    let index = users.findIndex (user => user.id==id);
    if(index != -1){
        res.send(users[index]);
    }else{
        res.send({error: "Users Not f"})
    }

})

app.get('/user', (req,res)=>{
    let name = req.query.name;
    let obj = [];
    for(let user of users){
        if(user.name.toLowerCase() == name.toLowerCase()){
            obj.push(user);
        }
    }
    
    res.send(obj);
})

app.listen(3000,()=>{
    console.log('server running');
});