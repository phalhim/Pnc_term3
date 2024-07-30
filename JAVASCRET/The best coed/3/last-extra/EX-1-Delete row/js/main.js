const btns =document.querySelectorAll('button');
function remoeRow(event){
    const Delete = window.confirm('love')
    if (Delete){
    event.target.closest('tr').remove()
    }
}

for (const btn of btns) {
    btn.addEventListener('click',remoeRow)
}