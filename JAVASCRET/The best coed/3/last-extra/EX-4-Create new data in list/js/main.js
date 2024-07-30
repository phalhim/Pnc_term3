const input = document.querySelector('#fruit');
const btn =document.querySelector('button');
const ul = document.querySelector('ul');


function showText(){
   let li = document.createElement('li');
   li.textContent = input.value;
   ul.appendChild(li);
   document.querySelector('#fruit').value = "";
}

btn.addEventListener('click',showText);