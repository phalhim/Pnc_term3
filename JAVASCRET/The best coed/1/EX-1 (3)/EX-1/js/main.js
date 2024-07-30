function randomWord() {
    // todo 
    let array = textElement.textContent.split(' ');
    output.textContent =array[Math.floor(Math.random()*array.length)];
}

const textElement = document.querySelector('.text');
const output = document.querySelector('#output');
// todo 


setInterval(randomWord, 1000);