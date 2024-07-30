const express = require('express')
const app = express()
const POST = 5000

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


app.get('/', (req, res) =>{
    res.send('Welcome ')
})

app.get('/user', (req, res) => {
    res.send(users)
})

app.get('/users', (req, res) => {
    let name = req.query.name;
    let obj = [];
    for(let user of users){
        if(user.naem.toLowerCase() === name.toLowerCase()){
            obj.push(user)
        }
    }
})

app.listen(POST, () => {
    console.log(`server run post ${POST}`);
})