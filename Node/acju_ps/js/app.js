axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    // Handling the response data
    console.log('Data from Axios (GET):', response.data);
    displayuser(response.data);
  })
  .catch(error => {
    // Handling errors
    console.error('Error from Axios (GET):', error.message);
  });


function displayuser(data) {
    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');
    let id = document.createElement('td');
    let name =document.createElement('td');
    let username = document.createElement('td');
    let email = document.createElement('td');

    id.textContent = data.id;
    name.textContent = data.name;
    username.textContent = data.username;
    email.textContent = data.email;

    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(username);
    tr.appendChild(email);
    tbody.appendChild(tr);
}
