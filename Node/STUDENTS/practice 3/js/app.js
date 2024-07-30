const tbody = document.querySelector('tbody');

function afterRequest(response) {
	// TODO create the DOM from the response data

	if(response.data){
		response.data.forEach(user => {
		let tr = document.createElement('tr');

		let id = document.createElement('td');
		let name = document.createElement('td');
		let username = document.createElement('td');
		let email = document.createElement('td');

		id.textContent = user.id;
		name.textContent = user.name;
		username.textContent = user.username;
		email.textContent = user.email;

		tr.appendChild(id);
		tr.appendChild(name);
		tr.appendChild(username);
		tr.appendChild(email);

		tbody.appendChild(tr);

		});

	}
}

// Request a GET on this URL : https://jsonplaceholder.typicode.com/users
// then : callback the function afterRequest

const URL = 'https://jsonplaceholder.typicode.com/users'
axios
.get(URL)
.then(afterRequest)
.catch(error =>{
	console.log('Error get');
})
