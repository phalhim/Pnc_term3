// The URL of the data we want to get
const STUDENT_URL = "data/students.json";

// Start this project 
// and have a look in the 'Console' and the 'Network' tab in chrome
const studentsContainer = document.getElementById("studentsContainer");

function afterStudentRequest(response) {
  // TODO: Display the list of students in the DOM
console.log(response);
if(response.data){
  console.log(response.data);
  response.data.forEach(user => {
  let li = document.createElement('li');

  let name = document.createElement('h5');
  let nickname = document.createElement('h5');
  let className = document.createElement('h5');
  
  name.textContent = user.name;
  nickname.textContent = user.nickname;
  className.textContent = user.class;
  
  li.appendChild(name);
  li.appendChild(nickname);
  li.appendChild(className);

  studentsContainer.appendChild(li);

  console.log("response from server:" );

});
}else{
  console.log("data of response:" );
}
}

// We use Axios library to do a HTTP request to the server
// Request a GET on STUDENT_URL to get the data from the JSON
// Once done the function 'afterStudentRequest' will be called
axios
.get(STUDENT_URL)
.then(afterStudentRequest)
.catch(error =>{
  console.log("Error function ");
})
