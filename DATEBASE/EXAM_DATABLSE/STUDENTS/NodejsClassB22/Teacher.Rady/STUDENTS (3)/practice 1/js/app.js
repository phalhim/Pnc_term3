const URL ="../data/student.json";
// Start this project 
// and have a look in the 'Console' and the 'Network' tab in chrome

const studentsContainer = document.getElementById("studentsContainer");
  
  function afterStudentRequest(response) {
    console.log("response from server:");
    console.log(response);
    console.log("data of response:");
    console.log(response.data);
    let students = response.data;
    for (let student of students){

        let head = document.createElement("p");
        head.class="name";
        let paragraph = document.createElement("p");
        paragraph.class="para";
        let element = document.createElement("p");
        element.class="class";
        let header=document.createElement("header");
        
        head.textContent = student.name;
        paragraph.textContent = student.nickname;
        element.textContent = student.class;
        

        
        document.body.appendChild(head);
        document.body.appendChild(paragraph);
        document.body.appendChild(element);
  }
}
axios.get(URL)
.then(afterStudentRequest)


// The URL of the data we want to get
const STUDENT_URL = "data/students.json";

// We use Axios library to do a HTTP request to the server
// Request a GET on STUDENT_URL to get the data from the JSON
// Once done the function 'afterStudentRequest' will be called
axios.get(STUDENT_URL).then(afterStudentRequest);
