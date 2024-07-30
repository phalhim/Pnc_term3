
function getTotal() {
    
    // TODO 
    let rows = document.querySelectorAll('tbody tr')
    let sum = 0
    for (let rew of rows) {
        let result = rew.lastElementChild.textContent.replace('$', '');
        sum += parseInt(result)
    }

    total.textContent = sum + '$'
}

function getQuantities(e) {

    // TODO   
    let quantity = e.target.value;
    let tdPrice = e.target.closest('td').nextElementSibling.textContent;
    let unitPrice = tdPrice.replace('$', '')
    let totalPrice = parseInt(quantity) * parseInt(unitPrice)

    // update total
    let trTotal = e.target.closest('tr').lastElementChild;
    trTotal.textContent = totalPrice + '$';

    getTotal();
}

let quantities = document.querySelectorAll('input');
let total = document.querySelector('.total');
for (let qty of quantities) {
    qty.addEventListener('change', getQuantities);
}

