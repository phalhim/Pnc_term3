// case 1:

// TODO: 
// YOUR CODE HERE

let arr = [1, 3, 6, 7, 9];
let newArray =[];
for (let i = 0;i < arr.length;i++) {
    if (arr[i]<5){
        newArray.push(arr[i]+(9-arr[i]))
    }else{
        newArray.push(arr[i])
    }
}
console.log(newArray);
// output: [9, 9, 6, 7, 9]

