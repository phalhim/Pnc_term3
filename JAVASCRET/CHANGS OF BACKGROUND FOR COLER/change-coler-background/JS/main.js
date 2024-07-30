let radios =document.getElementsByName("colers");
function setcoler(event){
    document.body.style.backgroundColor = event.target.value
}
for (const radio of radios){
    radio.addEventListener('change', setcoler)
}