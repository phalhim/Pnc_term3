const getName = document.querySelectorAll('tbody tr');

let firstName=[]
let lastName=[]
let email=[]
let phone =[]
for (let name of getName) {
    firstName.push(name.children[0].textContent)
    lastName.push(name.children[1].textContent)
    email.push(name.children[2].textContent)
    phone.push(name.children[3].textContent)
}
console.log(firstName);
console.log(lastName);
console.log(email);
console.log(phone);