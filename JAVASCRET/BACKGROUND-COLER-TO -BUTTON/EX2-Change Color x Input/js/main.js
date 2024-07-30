


function changeColor() {
    // TODO
    // change body color to color that get from input type color 
   document.body.style.backgroundColor = inputColor.value
    console.log(inputColor.value);
}

// Main
const inputColor = document.querySelector('#color')

// click on browser window to change color
document.addEventListener('change', changeColor)