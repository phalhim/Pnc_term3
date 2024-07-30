// TODO
let button = document.querySelector("button");
// GET URL https://reqres.in/api/unknown/23

function displayText(texts) {
    axios.get('https://reqres.in/api/unknown/23')
  .then(response => {
    console.log('Data from Axios (GET):', response.data);
    displayText(response.data);


  })
  .catch(error => {
  console.log('Error from Axios (GET):', error.message);
    if(error.message){
        let text = document.querySelector('#theText');
        text.textContent = 'SORRY WE ARE SLEEPING!!';
        console.log(texts);
    }

  })
}

button.addEventListener('click', displayText )