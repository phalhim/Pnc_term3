
// ---------------------------------------------------------------------------
const BASE_URL = 'http://localhost:4000';

function getKhmer() {
	
	// Request a GET on  /khmer path and write the result on  the <P> message
	// TODO
	axios.get(BASE_URL + "/khmer")
	.then(response=>{
		console.log(response.data.name);
		console.log(response.data.location);

		khmer.textContent=response.data.name
		locations.textContent=response.data.location

	});
}


function getPost() {
	
	// Request a GET on  /post path and write the result on  the <P> message
	// TODO
	axios.get(BASE_URL + "/post")
	.then(response=>{
		console.log(response.data.title);
		console.log(response.data.description);

		
		post.textContent=response.data.title;
		discriptions.textContent=response.data.description;

	})
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let khmer = document.querySelector(".khmer");
let locations = document.querySelector(".location");


let post = document.querySelector(".post");
let discriptions = document.querySelector(".descriptions");

let getKhmerBtn = document.querySelector(".get-khmer");
let getPostrBtn = document.querySelector(".get-post");

getKhmerBtn.addEventListener("click", getKhmer);
getPostrBtn.addEventListener("click", getPost);

