function saveProducts() {
    localStorage.setItem('productsData', JSON.stringify(productsData));
}

function loadProducts() {
    let loadProducts = JSON.parse(localStorage.getItem('productsData'));
    if (loadProducts != undefined) {
        productsData = loadProducts
    }
    else {
        saveProducts()
    }
}

function renderProducts() {
    // call load products
    loadProducts();
    // remove old tbody
    tbody.innerHTML = '';

    // create new table body element as "tBody"
    const tBody = document.createElement('tbody');

    // create all table rows depending data from product list
    productsData.products.forEach(product => {
        // create table row as "tRow"
        const tRow = document.createElement('tr');

        // create td element for name as "tdName"
        const tdName = document.createElement('td');
        // add textContent to td name  from product name
        tdName.textContent = product.name;

        // create td element for quantity as "tdQty"
        const tdQty = document.createElement('td');
        // add dataset as id to quantity from product id
        tdQty.dataset.id = product.id;

        // create Input element as "qtyInput"
        const qtyInput = document.createElement('input');
        // add attribute type input to number
        qtyInput.setAttribute('type', 'number');
        // add value to input from product quantity
        qtyInput.value = product.quantity;

        // append qtyInput to tdQty
        tdQty.appendChild(qtyInput);

        // create td element for unit price as "tdUnitPrice"
        const tdUnitPrice = document.createElement('td');
        // add text content to tdUnitPrice from product price + "$"
        tdUnitPrice.textContent = product.price + "$";

        // create td element for total price as "tdTotalPrice"
        const tdTotalPrice = document.createElement('td');
        // add text content to tdTotalPrice by product price * product quantity +"$"
        tdTotalPrice.textContent = product.price * product.quantity + "$";

        // append tdName, tdQty, tdUnitPrice, tdTotalPrice to tRow
        tRow.appendChild(tdName);
        tRow.appendChild(tdQty);
        tRow.appendChild(tdUnitPrice);
        tRow.appendChild(tdTotalPrice);

        // append tRow to tBody
        tBody.appendChild(tRow);
    });

    // append tBody to table
    let table = document.querySelector('table')
    table.appendChild(tBody);
}
// last total

function updateDate() {
    let tdTotalPriceElements = document.querySelectorAll('td:nth-child(4)');
    let totalPrice = 0;

    tdTotalPriceElements.forEach(elem => {
        totalPrice += parseFloat(elem.textContent);
    });

    total.textContent = totalPrice + "$";
}
// products data 
let productsData = {
    products: [],
    latestId: null
};
const tbody = document.querySelector('tbody')
let total = document.querySelector('.total');

// once you started we need to call load data and renderProductsData 
loadProducts()
renderProducts();
updateDate();
// localStorage.clear();