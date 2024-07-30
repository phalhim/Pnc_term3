
let btn = document.querySelector('button');


function dispayData() {
    axios.get('https://reqres.in/api/users?page=2')
        .then(response => {
            console.log('Data from Axios (GET):', response.data);
            let body=document.querySelector('body');
            response.data.data.forEach(data=> {
                body.innerHTML+=`
                <div class="list" style="border: 1px solid green; margin-top: 5px;">
                <li>Name: ${data.first_name}</li>
                <li>Gmail: ${data.email}</li>
              </div>
                `
            })
        })
        
    // console.log(datas);
 
    .catch(error => {
        console.error('Error from Axios (GET):', error.message);
    });

}
btn.addEventListener('click', dispayData)