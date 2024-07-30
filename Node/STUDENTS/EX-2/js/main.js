const URL = "https://jsonplaceholder.typicode.com/users";

let afterRequest = (response) => {
  // todo
  if(response.data){
    response.data.forEach(user => {
      let tr = document.createElement('tr');
      let username = document.createElement('td');
      let email = document.createElement('td');
      let addressCity = document.createElement('td');
      let addressGeo = document.createElement('td');
      let phone = document.createElement('td');
      let website = document.createElement('td');
      let company = document.createElement('td');
      
      username.textContent = user.username;
      email.textContent = user.email;
      addressCity.textContent = user.address['city'];
      addressGeo.textContent = user.address.geo['lat'];
      phone.textContent = user.phone;
      website.textContent = user.website;
      company.textContent = user.company['name'];

      tr.appendChild(username);
      tr.appendChild(email);
      tr.appendChild(addressCity);
      tr.appendChild(addressGeo);
      tr.appendChild(phone);
      tr.appendChild(website);
      tr.appendChild(company);


      tbody.appendChild(tr);

    });
  }
};
const tbody = document.querySelector('tbody');

// axios here
axios
.get(URL)
.then(afterRequest)
.catch(error=>{
  console.log('Error in the user');
})