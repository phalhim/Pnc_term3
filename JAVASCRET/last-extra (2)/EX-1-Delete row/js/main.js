const tbody = document.querySelectorAll('tbody tr');

const btns = document.querySelectorAll('button')
for (const btn of btns) {
    btn.addEventListener('click', remonBtn)
}

function remonBtn(event) {
    let show = alert('love')
    let list = event.target.closest('tr');
    list.remove()
}