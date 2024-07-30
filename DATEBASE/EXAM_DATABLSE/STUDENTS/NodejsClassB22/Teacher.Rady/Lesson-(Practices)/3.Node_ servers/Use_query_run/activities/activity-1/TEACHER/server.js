const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT);

// Example of REQUEST using QUERRY PARAMETERS
// localhost:3000/book?id=100
app.get("/book", (req, res) => {
  let id = req.query.id;
  res.send("this request uses QUERY to get: " + id);
});

// Example of REQUEST using ROUTE PARAMETERS
// localhost:3000/book/200
app.get("/book/:id", (req, res) => {
  let id = req.params.id;
  res.send("this request uses PARAMS to get: " + id);
});
