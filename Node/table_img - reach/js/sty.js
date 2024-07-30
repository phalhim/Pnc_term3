const tbody = document.querySelector('tbody');
const container = document.querySelector('container');
const inputs =document.getElementById('search');
let users;

axios.get('https://reqres.in/api/users?page=2')
  .then(response => {
    // Handling the response data
    console.log('Data from Axios (GET):', response.data);
    users= response.data.data;
    displayUser(users);
  })
  .catch(error => {
    // Handling errors
    console.error('Error from Axios (GET):', error.message);
  });


function displayUser(users) {
  tbody.innerHTML = "";
    users.forEach(user => {
    let tr = document.createElement('tr');
    let avatar = document.createElement('img');
    avatar.localName='imgs';
    let first_name =document.createElement('td');
    let last_name = document.createElement('td');
    let email = document.createElement('td');

    avatar.src = user['avatar'];
    first_name.textContent = user['first_name'];
    last_name.textContent = user['last_name'];
    email.textContent = user['email'];

    tr.appendChild(avatar);
    tr.appendChild(first_name);
    tr.appendChild(last_name);
    tr.appendChild(email);

    tbody.appendChild(tr);
    
  });

}


function Search(event) {
  let newUsers = users.filter((user) => user.first_name.toLowerCase().includes(event.target.value.toLowerCase()));
  displayUser(newUsers);
}

inputs.addEventListener('keyup', Search);