const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("button");// TODO  your code here
const color = document.querySelector("#result-color");// TODO  your code here

// return the color string code like example: #f00233
function colorCode() {
   // TODO your code here
   let colorCode = "#"
   for (let i = 0; i < 6; i++) {
      colorCode += hex[getRandomColor()];
   }
   return colorCode
}

// return the number by random number between 0 and 16 (length of hex)
function getRandomColor() {
   //  TODO your code 
   let index = Math.floor(Math.random()*hex.length)
   return index;

}

btn.addEventListener('click', function () {
   // TODO  your code here
   console.log(colorCode());
   document.body.style.backgroundColor=colorCode();
   color.textContent=colorCode();
});