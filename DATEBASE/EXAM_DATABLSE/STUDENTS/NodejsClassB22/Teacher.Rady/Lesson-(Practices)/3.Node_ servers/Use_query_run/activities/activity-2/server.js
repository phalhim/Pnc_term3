const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 4000;


// We serve assets on /public
app.use(express.static("public"));
app.use(cors({origin:"*"}));

app.listen(PORT, () => {
  console.log("server started");
});



// Example: Get the route "/item" and return the value {"name" : "Book"}
app.get("/item", (req, res) => {
  res.send({"name" : "Book"});
})


// TODO 1: Get the route "/khmer" and return the value {"name":"Cambodia", "location" : "Asia"}

app.get("/khmer",(req,res)=>{
  res.send({"name":"Cambodia","location":"Asia"});
})

// TODO 2: Get the route "/post" and return the value {"title":"History of Khmer", "description" : "History"}

app.get("/post",(req,res)=>{
  res.send({"title":"History of Khmer","description":"History"});
})