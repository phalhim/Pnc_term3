const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT);

// const BOOKS = [ 
// {id=1, name:"Rady dreams in 2019"}, 
// {id=2, name:"how to dream of code?"}, 
// {id=3, name:"how to kill covid"}
// ]

function getBookFromId(id) {
  // TODO find the book with the given id and return it - or return null if no book found
  return null;
}

// Example of REQUEST:  GET localhost: 3000/book?id=2
app.get("/book", (req, res) => {
	
  // 1- TODO get the id from the querry

  res.send("Hello world");

  // 2- TODO get the book from the id
  
  // 3- TODO send the book name : " book name : XXX"
});
