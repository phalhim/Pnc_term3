function setBook() {
    if (input.value === "") {
        return alert("pleass enter text ")
    }

    let uniqueID = localStorage.getItem('id')
    if (uniqueID === null) {
        uniqueID = 1;
        localStorage.setItem('id', JSON.stringify(uniqueID))
    } else {
        uniqueID = parseInt(uniqueID) + 1
        localStorage.setItem('id', JSON.stringify(uniqueID));
    }
    let book = {
        id: uniqueID,
        title: input.value
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    window.location.reload()

}

function deleteButton(e) {

    let index = e.target.closest('tr').dataset.indexs;
    console.log(index);
    console.log(books);
    books.splice(index, 1);

    getBook();

}

function editBook(event) {
    let editText = event.target.closest('tr');
    let showText = editText.firstElementChild.nextElementSibling.textContent;
    let d = document.querySelector('input').value = showText;

    let addButton = document.querySelector('#add');
    addButton.textContent = "update"
    addButton.removeAttribute('id');
    addButton.setAttribute('id', 'update')
    updateText()
}

function updateText() {
    let update = ''

}


function getBook() {
    document.querySelector('tbody').remove();
    let tbody = document.createElement('tbody');
    document.querySelector('table').appendChild(tbody);
    for (let index = 0; index < books.length; index++) {

        let tr = document.createElement('tr')
        tr.dataset.indexs = index;

        let tdId = document.createElement('td')
        tdId.textContent = books[index].id
        tdId.value

        let tdBook = document.createElement('td')
        tdBook.textContent = books[index].title
        tdBook.value

        let tdAction = document.createElement('td')
        let buttonDelete = document.createElement('button')
        buttonDelete.classList.add('delete')
        buttonDelete.textContent = 'delete'


        let buttonEdit = document.createElement('button')
        buttonEdit.classList.add('edit')
        buttonEdit.textContent = 'edit'

        tdAction.appendChild(buttonEdit)
        tdAction.appendChild(buttonDelete)
        tr.appendChild(tdId)
        tr.appendChild(tdBook)
        tr.appendChild(tdAction)
        tbody.appendChild(tr)
    }

}

const buttonAdd = document.querySelector('#add')
const input = document.querySelector('input')

let books = [];
let queryDate = localStorage.getItem('books')
if (queryDate !== null) {
    books = JSON.parse(queryDate)
}

buttonAdd.addEventListener('click', setBook)


// call getBook
getBook();
localStorage.clear()

let btnDeletes = document.querySelectorAll('.delete');
for (let buttonDelete of btnDeletes) {
    buttonDelete.addEventListener('click', deleteButton)
}

let edits = document.querySelectorAll('.edit')
for (let edit of edits) {
    edit.addEventListener('click', editBook)
}

