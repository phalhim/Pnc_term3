// DOMS ELEMENTS  ---------------------------------------------------------
const dom_questions_view = document.querySelector("#questions-view");
const dom_questions_dialog = document.querySelector("#questions-dialog");
console.log(dom_questions_dialog);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

// HIDE / SHOW ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

//  LOCAL STORAGE ---------------------------------------------------------
function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function loadQuestions() {
  let questionsStorage = JSON.parse(localStorage.getItem("questions"));
  if (questionsStorage !== null) {
    questions = questionsStorage;
  }
}

//  EDIT ---------------------------------------------------------

function renderQuestions() {
  // Remove the card container and create a new one
  dom_questions_container = document.querySelector("#questions-container");
  dom_questions_container.remove();
  dom_questions_container = document.createElement("div");
  dom_questions_container.id = "questions-container";
  dom_questions_view.appendChild(dom_questions_container);

  // 2 - For all questions,  create a new div (class : item), and append it the container
  for (let index = 0; index < questions.length; index++) {
    let question = questions[index];

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    dom_questions_container.appendChild(card);

    let questionInfos = document.createElement("div");
    questionInfos.className = "question-info";
    card.appendChild(questionInfos);

    let title = document.createElement("spam");
    title.className = "title";
    title.textContent = question.title;
    questionInfos.appendChild(title);

    // Create spams for title and author
    let actions = document.createElement("div");
    actions.className = "actions";
    card.appendChild(actions);

    let editAction = document.createElement("img");
    editAction.src = "../../img/edit.svg";
    editAction.addEventListener("click", editQuestion);
    actions.appendChild(editAction);

    let trashAction = document.createElement("img");
    trashAction.src = "../../img/trash.png";
    trashAction.addEventListener("click", removeQuestion);
    actions.appendChild(trashAction);
  }
}

function editQuestion(event) {
  // TODO  Get the question index using the dataset
  // alert('I miss you')
  let index =event.target.closest('.card').dataset.index


  // TODO   update the dialog with question informatin
  document.getElementById("title").value =questions[index].title;
  document.getElementById("choiceA").value = questions[index].choiceA;
  document.getElementById("choiceB").value = questions[index].choiceB;
  document.getElementById("choiceC").value = questions[index].choiceC;
  document.getElementById("choiceD").value = questions[index].choiceD;

  dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild.textContent ='UPDATE'
  dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild.removeAttribute('onclick') 
  dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild.setAttribute('onclick',`updateQuestion(${index})`)
  console.log(dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild);
  // TODO   Show the dialog
  show(dom_questions_dialog)
}

function updateQuestion(index){
  hide(dom_questions_dialog)
  let question = questions[index];
  question.title = document.getElementById("title").value;
  question.choiceA = document.getElementById("choiceA").value;
  question.choiceB = document.getElementById("choiceB").value;
  question.choiceC = document.getElementById("choiceC").value;
  question.choiceD = document.getElementById("choiceD").value;

  saveQuestions();

  renderQuestions();
  // console.log(questions);

  dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild.textContent = 'CREATE'
  dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild.removeAttribute('onclick')
  dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild.setAttribute('onclick','onCreate()');

  document.getElementById("title").value = '';
  document.getElementById("choiceA").value = '';
  document.getElementById("choiceB").value = '';
  document.getElementById("choiceC").value = '';
  document.getElementById("choiceD").value = '';
  
}

function removeQuestion(event) {
  //  Get index
  let index = event.target.parentElement.parentElement.dataset.index;

  // Remove question
  questions.splice(index, 1);

  // Save to local storage
  saveQuestions();

  // Update the view
  renderQuestions();
}

function onAddQuestion() {
  show(dom_questions_dialog);
}

function onCancel(e) {
  hide(dom_questions_dialog);
  
  dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild.textContent = 'CREATE'
  dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild.removeAttribute('onclick')
  dom_questions_dialog.firstElementChild.lastElementChild.lastElementChild.setAttribute('onclick','onCreate()');

  document.getElementById("title").value = '';
  document.getElementById("choiceA").value = '';
  document.getElementById("choiceB").value = '';
  document.getElementById("choiceC").value = '';
  document.getElementById("choiceD").value = '';

}

function onCreate() {
  hide(dom_questions_dialog);

  // 1- Create new question
  let newQuestion = {};
  newQuestion.title = document.getElementById("title").value;
  newQuestion.correct = "A";

  newQuestion.choiceA = document.getElementById("choiceA").value;
  newQuestion.choiceB = document.getElementById("choiceB").value;
  newQuestion.choiceC = document.getElementById("choiceC").value;
  newQuestion.choiceD = document.getElementById("choiceD").value;
  questions.push(newQuestion);

  // 2- Save question
  saveQuestions();

  // 3 - Update the view
  renderQuestions();
}

// MAIN  ---------------------------------------------------------

loadQuestions();

renderQuestions();
