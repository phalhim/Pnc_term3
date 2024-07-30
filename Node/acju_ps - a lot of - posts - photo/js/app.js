axios.get('https://jsonplaceholder.typicode.com/photos')
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
  
  let  container = document.querySelector('.container');

  users.forEach(user => {
    let card = document.createElement('div');
    card.className = "card";

    let albumId = document.createElement('h4');
    let id = document.createElement('h4');
    let title = document.createElement('p');

    let url = document.createElement('img');
    url.src = user.url;

    albumId.textContent = user.albumId;
    id.textContent = user.id;
    title.textContent = user.title;


    card.appendChild(albumId);
    card.appendChild(id);
    card.appendChild(title);
    card.appendChild(url);

    container.appendChild(card);
  });

  
}

