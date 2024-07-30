// normal color

function randomColor() {
    const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f']
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 15)
        color += colorCode[index]
    }
    return color
}
// background-image: linear-gradient(to right, red , yellow);
// Gradient color
function randomGradientColor() {
    let color1 = randomColor()
    let color2 = randomColor()
    let possition = "to right"

    return `linear-gradient(${possition},${color1},40%,${color2})`;
}

// set background color to body =  color code
 document.body.style.background =randomGradientColor()
// add text content to h1 = color code
document.querySelector("h1").textContent = randomGradientColor()