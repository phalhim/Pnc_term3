// DOMS ELEMENTS  ---------------------------------------------------------
const dom_questions_view = document.querySelector("#questions-view");
const questions_container = document.querySelector("#questions-container")

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
 for (let index = 0; index < questions.length; index++) {
  let question=questions[index];
  console.log(question.title);
  
    // 1 - Remove the card container and create a new one
    questions_container.remove()

    let dom_questions_container = document.createElement('div');
    dom_questions_container.setAttribute('id', 'questions-container')
  
    dom_questions_view.appendChild(dom_questions_container)
  
    // 2 - For all questions
    let card = document.createElement('div');
    card.setAttribute('class', 'card')
  
    // card.className="card";
  
    let question_info = document.createElement('div');
    question_info.setAttribute('class', 'question-info')
  
  
    let title = document.createElement('spam');
    title.setAttribute('class', 'title')
    title.textContent = 'What does HTML stand for?'
  
    let actions = document.createElement('div');
    actions.setAttribute('class', 'actions');
  
    let edit = document.createElement('img');
    edit.src = '../../img/edit.svg'
  
    let trash = document.createElement('img');
    trash.src = '../../img/trash.png'
  
    question_info.appendChild(title)
  
    actions.appendChild(edit)
    actions.appendChild(trash)
  
    card.appendChild(question_info)
    card.appendChild(actions)
  
    dom_questions_container.appendChild(card)
  
    console.log(dom_questions_container);
 }

}

function editQuestion(event) { }

function removeQuestion(event) {
  //  Get index from the dataset
  let index = event.target.parentElement.parentElement.dataset.index;

  // TODO Remove question at given index
  questions.splice(index,1)
  // TODO changes to local storage
  
  // TODO Update the view
  renderQuestions() 
}

// MAIN  ---------------------------------------------------------

// loadQuestions();
renderQuestions();
