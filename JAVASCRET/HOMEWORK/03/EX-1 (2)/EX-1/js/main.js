
// Loop 6 times to get the color code by random from items in array
// https://www.w3schools.com/js/js_random.asp
function rendomColer() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += hexArray[Math.floor(Math.random() * 16)];
    }
    return `#${code}`

}
document.body.style.backgroundColor = rendomColer()
document.querySelector("h1").textContent=rendomColer()