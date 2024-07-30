axios.get('https://jsonplaceholder.typicode.com/posts')
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
    let userId = document.createElement('td');
    let id =document.createElement('td');
    let title = document.createElement('td');
    let body = document.createElement('td');

    userId.textContent = user.userId;
    id.textContent = user.id;
    title.textContent = user.title;
    body.textContent = user.body;

    tr.appendChild(userId);
    tr.appendChild(id);
    tr.appendChild(title);
    tr.appendChild(body);        
    tbody.appendChild(tr);
  });
  
}
