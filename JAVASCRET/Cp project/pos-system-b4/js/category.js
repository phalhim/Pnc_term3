// // ==================Get Element of page category==============================
let dialog_addCategory=document.querySelector('#addcategory_dialog');
let category_name=document.querySelector('.nameCategory');
let category_description=document.querySelector('.descriptofCategory');
let tableCategory=document.querySelector('.content-table-category');
console.log(category_description,category_name,tableCategory);

// // ==========================show and hide element===========================
function hide(element) {
    element.style.display = "none";
}
function show(element) {
    element.style.display = "block";
}

// // ===============save localStorage==============================
function saveStorage(){
    localStorage.setItem("productDatas",JSON.stringify(productDatas));
    localStorage.setItem("id", JSON.stringify(uniqueId));
}

// =====================load localStorage=========================
function getProduct(){
    let productStroge=JSON.parse(localStorage.getItem("productDatas"));
    let idStorage=JSON.parse(localStorage.getItem("id"));
    if(productStroge !=null){
        productDatas=productStroge;
        uniqueId=idStorage;
    }
}
// // ======================Category Data================
let categoryData=[];
let uniqueId_category=0;

// =======================add category===========================
function addCategory() {
    console.log(1);
    show(dialog_addCategory)
}
// =====================cancel================
function onCancel(e) {
    hide(dialog_addCategory);
}

// ===============Add Category==========================
function add_category() {
    hide(dialog_addproduct)
   uniqueId_category += 1;
   let object_category = {
       id: uniqueId_category,
       categoryName:nameProduct.value,
       category:nameCategory.value,
       quantity:quantityProduct.value,
       price:netPrice.value,
   };
   productDatas.push(object);
   saveStorage();
   getProduct();
   showPoduct()
   clear()
   window.location.reload()
}




