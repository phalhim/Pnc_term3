let arr = [1, 3, 6, 7, 9];
let max = arr[0];
for (let i in arr) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

for (let i in arr) {
    if (arr[i] < 5) {
        arr[i] = max;
    }
}

console.log(arr);
