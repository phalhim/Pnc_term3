axios.get('https://reqres.in/api/unknown/2')
    .then(response => {   //if
        // Handling the response data
        console.log('Data from Axios (GET):', response.data);
        console.log(response.data.data);
        displaydata(response.data.data)
    })
    .catch(error => {   // else  when jab api ot ban
        // Handling errors
        console.error('Error from Axios (GET):', error.message);
    });

    function displaydata(datas) {
        let text=document.querySelector('#theText');
        text.style.backgroud=datas.color;
        console.log(text);
        text.textContent=datas.name
    }
