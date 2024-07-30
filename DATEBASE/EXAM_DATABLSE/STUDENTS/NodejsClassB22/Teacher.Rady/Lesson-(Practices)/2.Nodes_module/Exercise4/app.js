const fs = require ('fs');
let text = fs.readFileSync('bob.txt').toString();
console.log(text);

