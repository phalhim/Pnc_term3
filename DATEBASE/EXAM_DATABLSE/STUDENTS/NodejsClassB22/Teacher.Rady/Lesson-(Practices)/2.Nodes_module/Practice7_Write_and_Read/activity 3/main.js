

// 1- Import the module ‘fs’   (file system) to read and write files
let fs =require ('fs');
// 2 - Write  a file rady.txt  with the content : Him is the best front programmer
let text ="Him is the best front programer";
fs.writeFileSync('text.txt',text);

// 3 - Read the content of the file  rady.txt
let reade = fs.readFileSync('text.txt').toString();
console.log(reade);

// 4 - Add to this content ‘But Ronan is the funniest’ and write again our file

// 2 - Write  a file rady.txt  with the content : Him is the best front programmer
let texts ="But Ronan is the funniest";
fs.writeFileSync('text.txt',texts);

// 3 - Read the content of the file  rady.txt
let reades = fs.readFileSync('text.txt').toString();
console.log(reades);


let textss ="We are student in PNC cambodia now day.";
fs.writeFileSync('text.txt',textss);

// 3 - Read the content of the file  rady.txt
let readess = fs.readFileSync('text.txt').toString();
console.log(readess);

