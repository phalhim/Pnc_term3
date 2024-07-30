const randomAuthor = () => {
   // TODO: random author name
   let arrayName = []
   for (const trr of tr) {
    arrayName.push(trr.children[1].textContent)
    // console.log(trr.children[1].textContent);
   }
   let random = Math.floor(Math.random() *arrayName.length);
//    console.log(arrayName);
//    console.log(random);
//    console.log(arrayName[random]);
   showTitle.textContent = arrayName[random]
}

// search movie title
const searchMovieTitle = () => {
    // TODO: search movie by title
    console.log(searchText.value.toLowerCase());
    for (const tableRow of tr) {
        console.log(tableRow.firstElementChild.textContent);
        let title = tableRow.firstElementChild.textContent;
        if (title.toLowerCase().includes(searchText.value.toLowerCase())) {
            tableRow.style.display = ''
        } else {
            tableRow.style.display = 'none'
        }
    }
    
}


// Main
const tr = document.querySelectorAll('tbody tr');
const searchText = document.querySelector('#search');
const showTitle = document.querySelector('h1');

// TODO: Add event listeners on input search
searchText.addEventListener('keyup',searchMovieTitle)

// TODO: call randomAuthor function every 1000 milliseconds
// setInterval(randomAuthor,1000)
setInterval(randomAuthor,1000)