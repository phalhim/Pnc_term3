axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Handling the response data
    console.log('Data from Axios (GET):', response.data);
    // call function displayuser
    displayuser(response.data);
  })
  .catch(error => {
    // Handling errors
    console.error('Error from Axios (GET):', error.message);
  });

// funtion create table 
function displayuser(users) {
  
    let tbody = document.querySelector('tbody');
    users.forEach(user => {
        let tr = document.createElement('tr');
    let id = document.createElement('td');
    let name =document.createElement('td');
    let username = document.createElement('td');
    let email = document.createElement('td');
    let phone = document.createElement('td');
    let website = document.createElement('td');
    let company = document.createElement('td');


    id.textContent = user.id;
    name.textContent = user.name;
    username.textContent = user.username;
    email.textContent = user.email;
    phone.textContent =user.phone;
    website.textContent =user.website;
    company.textContent = user.company['bs'];

    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(username);
    tr.appendChild(email);    
    tr.appendChild(phone);    
    tr.appendChild(website);    
    tr.appendChild(company);    
    tbody.appendChild(tr);
    });
  
}
