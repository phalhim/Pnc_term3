let products = [];
let button = document.getElementById('addProductBtn');
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');


function saveLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(products))
}

function getLocalSorage() {
    let productStorages = JSON.parse(localStorage.getItem('tasks'));
    // console.log('oroductSorages',productStorages);
    if (productStorages != null) {
        products = productStorages
    }
}

function removeStorage() {
    localStorage.removeItem('tasks')
}

function clearAllStorage() {
    localStorage.clear()
}

function addPorducts() {

    let newProduct = {};
    newProduct.name = productName.value;
    newProduct.price = productPrice.value;

    const tbody = document.querySelector('tbody');
    const trs = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = productName.value;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = productPrice.value;

    const tdBtn = document.createElement('td');
    const btn = document.createElement('button');
    btn.textContent='Delete';
    tdBtn.appendChild(btn);

    trs.appendChild(tdName);
    trs.appendChild(tdPrice);
    trs.appendChild(tdBtn);
    tbody.appendChild(trs);

    products.push(newProduct);
    saveLocalStorage();
}

button.addEventListener('click', addPorducts);
getLocalSorage();
// removeStorage()
// clearAllStorage()
console.log(products);


// let productStorage='{"name": "PC","price":12}';
// let prodcut=JSON.parse(productStorage)
// console.log(prodcut.price);



