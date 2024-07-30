const removePoster = (event) => {
    let poster_card =event.target.closest('.poster');
    let isComFirm = confirm("Are you sure")
    if (isComFirm){
        poster_card.remove()
    }
}

// Main 
let button =document.querySelectorAll('button');
for (let poster of button){
    poster.addEventListener('click',removePoster)
}
