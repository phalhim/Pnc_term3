
// TODO:
// YOUR CODE HERE
let text=[1,3,5,0,2,0,1,1,2,3]
let newText = 0
let res = false
for (let index of text) {
    if (index == 1 && !res) {
        res = true
    } else if (index == 0) {
        res = false
    } else if (res) {
        newText += index
    }
}
console.log(newText);
// output: 14 becuase 3 + 5 + 1 + 2 + 3


