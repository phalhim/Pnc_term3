
function getValue(elements) {
    let result = []
    for (let element of elements) {
        if (element.checked) {
            result.push(element.value)
        }
    }
    return result

}

function showCase() {

    const cards = document.querySelectorAll('.card'); //list card
    let arrayCheckbox = getValue(checkboxes); // list array checkbox

    // TODO: 
    //If there is no check, all cards is visible
    for (const card of cards) {
        if (arrayCheckbox.includes(card.firstElementChild.textContent) || arrayCheckbox.length === 0) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
    //If at least one of them is checked display that card to block otherwise is invisible.
    return arrayCheckbox
}

// Main
const content = document.querySelector('.content');//card

const checkboxes = document.querySelectorAll('.lang');//box


for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', showCase);
}
