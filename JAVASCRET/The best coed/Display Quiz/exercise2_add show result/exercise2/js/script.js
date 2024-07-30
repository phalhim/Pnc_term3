// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  let newTask = {};

  //  2- Set the description from the text field
  descriptionValue = document.getElementById("description");
  newTask["description"] = descriptionValue.value;
  descriptionValue.value=""

  // 3- Set the priority fro from select field
  priorityValue = document.getElementById("priority").value;
  if (priorityValue === "Hight") {
    newTask["priority"] = 1;
  } else {
    newTask["priority"] = 0;
  }

  // 4- Add the new object to the array
  tasks.push(newTask);

  console.log(tasks);
  createDom()
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// my testing
function createDom() {
  let container = document.getElementById('content')
  const description = document.createElement('p')
  const priority = document.createElement('p')
  // loop on tasks
  tasks.forEach(task => {
    description.textContent = task["description"]
    priority.textContent = task["priority"]
    container.appendChild(description)
    container.appendChild(priority)
  });
  console.log('hekeki',tasks);
}
// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
