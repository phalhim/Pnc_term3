const express =require('express');
const app= express();
const PORT =5000;
app.listen(PORT,()=>console.log('Server running on port 5000...'));

///It will lestin on the studen only get ('/)= listen
app.get('/',(req,res)=>{
    return res.send({"Message":"Hello Nod js"});
});


app.get('/students',(req,res)=>{
    return res.send({"message":"Student listen"})
})

let students = [
    {
        "name": "Jonh",
        "sport":"football"
    },
    {
        "name": "Bobo",
        "sport":"valleybal"
    },
    {
        "name": "Baba",
        "sport":"Besketball"
    }
];

// localhost:5000/stu?name=jonh
//{"result":"Football"}

// this virable for localhost=-=====
app.get ('/stu', (req, res) => {
    let name = req.query.name;
    for(let student of students){
        if (student.name===name){
            return res.json({"result":student.sport})
        }
    }
    return res.json(students);
})


app.get('/user',(req,res)=>{
    let name = req.query.name;
    let age = req.query.age;
    return res.json([{'name':name,"age":age}])
})


// localhost : 5000/item/12

app.get('/item/:id',(req,res)=>{
    let itemId=req.params.id;
    return res.json([{'id':itemId}])
});


// localhost 
