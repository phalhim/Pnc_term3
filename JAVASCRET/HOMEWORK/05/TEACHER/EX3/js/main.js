let arrOne = [1, 3, 6, 7, 9];
let arrTwo = [4, 3, 5, 9, 1];
let arrThree = [];

for (let i in arrOne) {
    if (arrOne[i] > arrTwo[i]) {
        arrThree.push(arrOne[i]);
    }else {
        arrThree.push(arrTwo[i]);
    }
}
console.log(arrThree);