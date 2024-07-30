let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
let isOne = false;
let sum = 0;
for (let number of numbers) {
    if (number === 1 && !isOne) {
        isOne = true;
    }else if (number === 0) {
        isOne = false;
    }else if (isOne) {
        sum += number;
    }
}
console.log(sum);