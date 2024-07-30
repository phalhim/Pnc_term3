const keyboardEvent = (event) => {
    // TODO 
    // https://www.w3schools.com/jsref/event_key_key.asp
let keys =event.key;
let text =document.querySelector("h1");
text.innerHTML=keys;
} 

document.addEventListener('keydown', keyboardEvent);