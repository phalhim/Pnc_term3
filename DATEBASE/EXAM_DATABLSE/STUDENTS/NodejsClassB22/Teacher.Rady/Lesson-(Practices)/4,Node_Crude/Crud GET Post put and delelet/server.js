const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT,()=> console.log('Server runing on port: '+PORT+'.....'));

app.use(express.json());
app.use(express.urlencoded());

let students =[
    {
        "name":"John",
        "age": 30
    },
    {
        "name":"jack",
        "age": 20
    }
]
//Get students: /api/students
app.get('/api/students',(req, res) => {
    if(students.length >0){
        res.send(students);
    }else{
        res.send({"message":"Not Found the students"})
    }
});


//create or insert students: /api/students
app.post('/api/students',(req, res) =>{
    console.log(req.body);
    students.push(req.body);
    res.send({"message":"create students successfully"})
})
//Delete students: /api/students/:id
app.delete('/api/students/:id', (req, res) =>{
    let id = req.params.id;
    // if have id in json we use this fountion
    // let index = students.findIndex((student)=> student.id === id);

    students.splice(id,1);
    res.send({"message":"delete successfully"})
})

//put or update students: /api/students/:id
app.put('/api/students/:id',(req, res)=>{
    let index = req.params.id;
    let studentName = req.body.name;
    let studentAge = req.body.age;
    let student = students[index];
    student.name = studentName;
    student.age = studentAge;

    // console.log(student)
    // console.log(studentName,studentAge);

    res.send({"message":"update successfully"});
})