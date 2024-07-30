const express =require('express');
const res = require('express/lib/response');
const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server running on the port " + PORT+"...")
});

app.get('/',(req,res)=>{
    res.send("Hello world");
});

let students=[
    {
    "id":1,
    "name":"Narong",
    "email":"narong@gmail.com"
    },
    {
    "id":2,
    "name":"Savany",
    "email":"savany@gmail.com"
    },
    {
    "id":3,
    "name":"Daray",
    "email":"daray@gmail.com"
    },
    {
    "id":4,
    "name":"Money",
    "email":"money@gmail.com"
    }
];

app.get("/api/students",(req,res)=>{
    res.send(students);
});

app.get("/api/students/:id",(req,res)=>{

    let id = req.params.id;
    for (let student of students){
        if (student.id === parseInt(id)){
            res.send(student);
        }
    
    }
    res.status(404).send("Data is can not found");
});
//Create on student /api /studen :Post
app.post('/api/students',(req,res)=>{
    let student =req.body;
    let id = students.length + 1;
    let name = student.name;
    let email = student.email;
    let newStudent = {
        "id":id,
        "name":name,
        "emali":email
    }
    students.push(newStudent);
    res.send({
        "ms":"Success"
    })
})


// remove on student / api /student : DELETE
app.delete("/api/students/:id",(req,res)=>{
    let id =req.params.id;
    let index =students.findIndex(student => student.id===parseInt(id));
    if(index >=0){
        students.splice(index,1);
        res.status(200).send({"ms":"delete success"})
        
    }else{
        res.status(404).send({"ms":"id not found"})
    }
})

/* Update a specific employee */
app.put("/api/students/:id", (req, res) => {
    let id = req.params.id;
    let index =-1;
    for(let student of students){
        if(student.id === parseInt(id)){
            index = student.id-1;
        }
    }
    if(index >= 0){
        let student = students[index];
        student.name = req.body.name;
        student.email = req.body.email;
        res.send({"massage":"Updated successfully"})
    }else{
        res.status(404).send({"message":"not define"})
    }
  });


