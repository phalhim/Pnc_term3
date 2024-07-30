let deletl = document.querySelectorAll('.delete');

function remoeBox(e) {
    let text =alert('hi');
    e.target.closest('li').remove();
}

for (const btn of deletl) {
    btn.addEventListener('click',remoeBox);
}