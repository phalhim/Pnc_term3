
// Main 
const posters = document.querySelectorAll('.poster');
const right = document.querySelector('.right');
const views = document.querySelector('.view');

const imgage =document.querySelector('img');
const textH1 = document.querySelector('h1');
const textP = document.querySelector('p');

for (const poster of posters) {
    poster.onclick = () => {
        imgage.src = poster.firstElementChild.firstElementChild.src;
        textH1.textContent =poster.lastElementChild.firstElementChild.textContent;
        textP.textContent=poster.lastElementChild.lastElementChild.textContent;
        views.appendChild(imgage)
        views.appendChild(textH1)
        views.appendChild(textP)
    }
}
