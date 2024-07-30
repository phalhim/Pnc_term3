const tbodys = document.querySelectorAll('tbody tr');

let firstName =[];
let lastName =[];
let email =[];
let phone =[];

for (const tbody of tbodys) {
    firstName.push(tbody.children[0].textContent);
    lastName.push(tbody.children[1].textContent);
    email.push(tbody.children[2].textContent);
    phone.push(tbody.children[3].textContent);
}
console.log(firstName);
console.log(lastName);
console.log(email);
console.log(phone);