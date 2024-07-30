const searchs =document.querySelector('input');
searchs.addEventListener('keyup',searchFruits)

function searchFruits(event){
    let searchList = event.target.value.toLowerCase();
    let lists = document.querySelectorAll('li');
    for (const list of lists) {
        let listResult = list.textContent.toLowerCase();
        if (listResult.includes(searchList)) {
            list.style.display = 'block';
        }else{
            list.style.display = 'none';
        }
    }
}