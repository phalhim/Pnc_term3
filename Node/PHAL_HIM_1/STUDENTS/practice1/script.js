// GET URL : https://reqres.in/api/unknown/2

axios.get('https://reqres.in/api/unknown/2')
  .then(response => {
    console.log('Data from Axios (GET):', response.data.data);
    displayName(response.data.data);

  })
  .catch(error => {
  console.log('Error from Axios (GET):', response.error);
  })


  function displayName(text) {
    let name=document.querySelector('#theText');
    name.style.backgroud=text.color;
    name.textContent=text.name
}

