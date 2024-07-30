let fs = require('fs');
// 1- Read the number N contained in the file number.txt
let readNumer = fs.readFileSync('number.txt').toString();
console.log(readNumer);
// 2- Read the message contained in the file message.txt

let message = fs.readFileSync('message.txt').toString();
// 3- Write N times the message in a new file :  result.txt
console.log(message);

let writenewfile ="";


for(let i =0 ; i <7 ; i++){

    writenewfile+=message
    
}


fs.writeFileSync('result.txt',writenewfile);


// Example : 


// number.txt:	 	3
// message.txt: 	I love potatoes
// result.txt: 		I love potatoes I love potatoes I love potatoes

10 + 10 + 10  + 25 + 25 + 10 + 20


