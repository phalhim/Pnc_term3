const URL = "https://jsonplaceholder.typicode.com/users";

let afterRequest = (responses) => {
 // todo
 //call data user 
if(responses.data){
responses.data.forEach(user => {

//create the table
let tr = document.createElement('tr');
let usernames = document.createElement('td');
let email = document.createElement('td');
let addressCity = document.createElement('td');
let addressName = document.createElement('td');
let phone = document.createElement('td');
let website = document.createElement('td');
let company = document.createElement('td');

//call user have in the jsonplaceholder 
usernames.textContent = user.username;
email.textContent = user.email;
addressCity.textContent = user.address['city'];
addressName.textContent = user.address.geo['lat'];
phone.textContent = user.phone;
website.textContent = user.website;
company.textContent = user.company['name'];

//call all the user input to table
tr.appendChild(usernames);
tr.appendChild(email);
tr.appendChild(addressCity);
tr.appendChild(addressName);
tr.appendChild(phone);
tr.appendChild(website);
tr.appendChild(company);

tbody.appendChild(tr);

});
};
 
};


const tbody = document.querySelector('tbody');
axios
  .get(URL)
  .then(afterRequest)
  .catch((error) => {
    console.log(error);
  });
