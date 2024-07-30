// TODO 
let nameBook =document.getElementsByClassName("book-name");
Books=nameBook.length;

let res =document.getElementById("books-number");
res.textContent=Books;

let result="";
for (let book of nameBook){
    result+= book.textContent + ' ';
}
let nametext=document.getElementById("books-titles");
nametext.textContent=result;
console.log(nametext);
