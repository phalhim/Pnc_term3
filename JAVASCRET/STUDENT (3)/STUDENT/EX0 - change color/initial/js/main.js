// TODO 
let button =document.querySelector('button');
let paragraph = document.querySelector('p');
let div =document.querySelector('div');

let bg_button =()=>{
    document.body.style.background='red'
}
let bg_paragraph =()=>{
    document.body.style.background='blue'
}
let bg_div =()=>{
    document.body.style.background='pink'
}

button.addEventListener("click",bg_button);
paragraph.addEventListener('click',bg_paragraph);
div.addEventListener('click',bg_div)