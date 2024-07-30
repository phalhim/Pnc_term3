function saveProducts() {
    // save data to localStorage 
    localStorage.setItem('productsData', JSON.stringify(productsData));
}

function loadProducts() {
    // load data from localStorage 
    let loadProducts = JSON.parse(localStorage.getItem('productsData'));
    if (loadProducts != undefined) {
        productsData = loadProducts
    }
    else {
        saveProducts()
    }
}
function addProduct() {

    // to check if product id == null set it to 1 otherwise set it to value itself += 1 
    let product = productsData.latestId;
    if (product === null || productsData.products.length === 0) {
        product = 1
        console.log(product);
    } else {
        product += 1;
    }

    // update latest ID to the product list 
    productsData.latestId=product

    // create new product and add product to product list 
    let proId ={
        ID:product,
        name:productName.value,
        quantity: quantity.value,
        price: price.value
    }

    // push new product to list product 
    productsData.products.push(proId)

    // clear form 
    saveProducts()

    // save data 
    productName.value=""
    quantity.value=""
    price.value=""
}

const productName = document.querySelector('#product-name');
const price = document.querySelector('#price');
const quantity = document.querySelector('#qty');
const btn = document.querySelector('button');

// products data 
let productsData = {
    products: [],
    latestId: null
};

// load product 
loadProducts()
btn.addEventListener('click', addProduct);