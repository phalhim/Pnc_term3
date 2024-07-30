const navbar = document.querySelectorAll('li a');
let navText = "";


for (let nav of navbar) {
    navText += nav.textContent + ", ";
}
const tiltes = document.querySelector('h1')
const text = document.querySelector('p')
const btn = document.querySelector('button')
const containers = document.querySelector('.container')

function showMessage() {

    const resultRemov=document.querySelector('.result');
    if (resultRemov !==null){
        resultRemov.remove()
    }
    const result = document.createElement('div')
    result.className = 'result'

    const h1Tilte = document.createElement('h1');
    h1Tilte.textContent = tiltes.textContent;
    result.appendChild(h1Tilte);

    const pText = document.createElement('p')
    pText.textContent=text.textContent;
    result.appendChild(pText);

    containers.appendChild(result)
}
btn.addEventListener('click', showMessage)