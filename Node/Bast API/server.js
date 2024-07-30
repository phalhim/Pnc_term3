const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/post',(req,res)=>{
    res.send('Hello post')
})

app.post('/post',(req,res)=>{
    res.send(req)
})

app.get('/product',(req,res)=>{
    res.send('Hello product')
})


app.listen(3000,()=>{
    console.log("Server run port: 3000");
})