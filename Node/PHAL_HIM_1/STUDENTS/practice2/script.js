// TODO
let button =document.querySelector('button');
// Get URL https://reqres.in/api/users?page=2
function displayText(texts) {

axios.get('https://reqres.in/api/users?page=2')
  .then(response => {
    console.log('Data from Axios (GET):', response.data.data);
    displayText(response.data.data);

    let body = document.querySelector('body');
    body.innerHTML+=` `
    texts.forEach(text => {
    
    let div = document.createElement('div');
    div.className= 'list' ;
    div.style="border: 1px solid green; margin-top: 5px;";

    let liName = document.createElement('li');
    liName.textContent = text.first_name;

    let liEmail = document.createElement('li')
    liEmail.textContent = text.email;

    div.appendChild(liName)
    div.appendChild(liEmail)

    body.appendChild(div);
 
  });

  })
  .catch(error => {
  console.log('Error from Axios (GET):', response.error);
  })
}

button.addEventListener('click', displayText)