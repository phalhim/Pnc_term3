
function AddPerson() {
    // to check gender 
    let sex = gender.checked ? gender.value : 'Female';

    // create table row name tableRow 
    let tableRow = document.createElement("tr")
    // create table data name tdFirstName 
    let tdFirstName = document.createElement("td")
    // add value of firstName as textContent 
    tdFirstName.textContent = firstName.value
    // create table data name tdLastName
    let tdLastName = document.createElement("td")
    // add value of lastName as textContent 
    tdLastName.textContent = lastName.value
    // create table data name tdEmail
    let tdEmail = document.createElement("td")
    // add value of email as textContent 
    tdEmail.textContent = email.value
    // create table name tdProvince
    let tdProvince = document.createElement("td")
    // add value of province as textContent
    tdProvince.textContent = province.value
    // create table data name tdFavourite 
    let tdFavourite = document.createElement("td")
    // add value of favourite as textContent
    tdFavourite.textContent = favourite.value
    // create table data name tdGender 
    let tdGender = document.createElement("td")
    // add value of sex as textContent
    tdGender.textContent = gender.value

    // append tdFirstName, tdLastName, tdEmail, tdProvince, tdGender, tdFavourite to tableRow
    tableRow.appendChild(tdFirstName)
    tableRow.appendChild(tdLastName)
    tableRow.appendChild(tdEmail)
    tableRow.appendChild(tdProvince)
    tableRow.appendChild(tdGender)
    tableRow.appendChild(tdFavourite)
    // append tableRow to tbody 
    tbody.appendChild(tableRow)
}



// Main
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const province = document.querySelector('#province');
const favourite = document.querySelector('#favorite');
let gender = document.querySelector('input[name="gender"]');
const submitButton = document.querySelector('#submit');
const tbody = document.querySelector('tbody');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    AddPerson();
});
