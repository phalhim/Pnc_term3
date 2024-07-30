
// Remove row functions from the table
const removeRow = (event) => {
    // TODO: Remove row with confirmation message when click on remove button
    let tr = event.target.closest('tr');
    console.log(event.target.closest('tr'));
    let isConfirm = confirm('Are you want to delete?')
    console.log(isConfirm);
    if (isConfirm) {
        tr.remove()
    }
}

// View user information in list 
const viewUser = (event) => {
    // TODO: View user information in list by click on view button
    let row = event.target.closest('tr');
    let newUl = document.createElement('ul');
    leftBox.lastElementChild.remove();

    // console.log(row.children.length);
    for(let i = 0;i<row.children.length-1;i++){
        let li = document.createElement('li');
        // console.log(row.children[i].textContent);
        li.textContent = row.children[i].textContent;
        // console.log(li);
        newUl.appendChild(li);
    }
    leftBox.appendChild(newUl);
}

// Main
const leftBox = document.querySelector('.left-box');
const btnViews = document.querySelectorAll('.view');
const btnRemoves = document.querySelectorAll('.remove');
// TODO: Add Event listeners to remove button
for (const btnRemove of btnRemoves) {
    btnRemove.addEventListener('click', removeRow)
}

// TODO: Add event listeners to view button
for (const btnView of btnViews) {
    btnView.addEventListener('click', viewUser)
}