
function getRadioValue(radios) {
    // TODO: get Radio value from radios array
    for (const input of radios) {
        if (input.checked) {
            return input.value
        }
    }
}

function getCheckboxValue(checkboxes) {
    // TODO: get Check box value from checkboxes array
    let res = " ";
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            // Return value example: red, orange, purple
            res += checkbox.value + ","
        }
    }
    // remove the last charector by slice(0, -1) 
    res = res.slice(0, -1);
    return res
}


function submitSurvey() {
    let qOne = getRadioValue(questionOne);
    let qTwo = getRadioValue(questionTwo);

    let qThree = getCheckboxValue(questionThree);
    let qFour = getCheckboxValue(questionFour);

    answerOne.textContent = qOne;
    answerTwo.textContent = qTwo;
    answerThree.textContent = qThree;
    answerFour.textContent = qFour;
}


// Main
const questionOne = document.querySelectorAll('input[name="q_1"]');
const questionTwo = document.querySelectorAll('input[name="q_2"]');
const questionThree = document.querySelectorAll('.chef');
const questionFour = document.querySelectorAll('.canteen');

const answerOne = document.querySelector('#quality')
const answerTwo = document.querySelector('#taste')
const answerThree = document.querySelector('#chef')
const answerFour = document.querySelector('#canteen')

const submitButton = document.querySelector('#submit');
const questionContainer = document.querySelector('.form-container');
const resultContainer = document.querySelector('.result-container');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    resultContainer.classList.remove('hide');
    questionContainer.classList.add('hide');
    submitSurvey();
});