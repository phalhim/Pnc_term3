// // TODO
// // GET URL https://reqres.in/api/unknown/23

let btn=document.querySelector('button');

function dispayData(datas) {

    axios.get('https://reqres.in/api/unknown/23')
    .then(response => {
        console.log('Data from Axios (GET):', response.data);

    })
    .catch(error => {
        console.error('Error from Axios (GET):', error.message);
        if (error.message == "Request failed with status code 404") {
            let text = document.querySelector('#theText');
            text.textContent="SORRY WE ARE SLEEPING!!"
            console.log(datas);
        }

    });
   
}
btn.addEventListener('click',dispayData)