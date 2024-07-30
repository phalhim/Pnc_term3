let namePro = document.querySelector('#proName');
let qty = document.querySelector('#proQty');
let tol = document.querySelector('#protol');
let totalAll = document.querySelector('#Total');
let tbody = document.querySelector('tbody');
let searchID = document.querySelector('#searchId');


let productDatas = [];
// ===============save localStorage==============================
function saveStorage() {
    localStorage.setItem("productDatas", JSON.stringify(productDatas));
}
// =====================load localStorage=========================
function getProduct() {
    let productStroge = JSON.parse(localStorage.getItem("productDatas"));
    if (productStroge != null) {
        productDatas = productStroge;
    }
    else {
        saveStorage()
    }
}

//  ========================Search Product==================================
// const search_id = () => {
//     console.log(searchID.value);
//     for (let i=0;i<productDatas.length;i++){
//         console.log(productDatas[i].id);
//         let idPro=productDatas[i].id;
//         if(idPro.includes(searchID.value)){
//             console.log(productDatas[i]);
//         }else{
//             console.log(2);
//         }
//     }
// }
const search_id = () => {
    let searchValue = searchID.value;
    for (let i = 0; i < productDatas.length; i++) {
        let idPro = productDatas[i].id;
        if (idPro.includes(searchValue)) {
            return productDatas[i];
        }
    }
    return null;
}

let product = search_id();
if (product !== null) {
    // Display product details on the page
    namePro.textContent = product.name;
    qty.textContent = product.qty;
    tol.textContent = product.tol;
} else {
    // No product found
    console.log('No product found with the given ID.');
}




searchID.addEventListener('keyup', search_id)
getProduct()