function randomColer() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += hexArray[Math.floor(Math.random() * 16)];
    }
    return `#${code}`

}
function gradientColer() {
    let coler1 = randomColer();
    let coler2 = randomColer();
    let coler3 = randomColer();
    let coler4 = randomColer();
    let coler5 = randomColer();
    let position = "to left top"
    return `linear-gradient(${position},${coler1},50%,${coler2},${coler3},50%,${coler4},50%,${coler5})`;
}
document.body.style.background = gradientColer()
document.querySelector("h1").textContent = gradientColer()