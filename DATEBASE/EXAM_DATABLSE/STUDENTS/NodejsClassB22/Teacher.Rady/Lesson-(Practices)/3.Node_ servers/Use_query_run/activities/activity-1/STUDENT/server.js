const express = require("express");
const app = express();
const PORT = 3000;
//Start server
app.listen(PORT);



//+++++++++++++++TODO+++++++++++++++++++++++

// Example of REQUEST using QUERRY PARAMETERS
// localhost:3000/book?id=100
app.get("/book", (req, res) => {

    res.send('hello world' + PORT);
   

});

// Example of REQUEST using ROUTE PARAMETERS
// localhost:3000/book/200
app.get("/book", (req, res) => {
    

});
