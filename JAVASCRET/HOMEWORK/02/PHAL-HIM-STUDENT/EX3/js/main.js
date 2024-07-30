let arrOne = [1, 2, 4, 6];
let arrTwo = [3, 2, 9, 5];
let newArray = [];

for (let i = 0; i < arrOne.length; i++) {
  
  if (arrOne[i] > arrTwo[i]) {
    newArray.push(arrOne[i]);
  } else if (arrOne[i] < arrTwo[i]){
    newArray.push(arrTwo[i]);
  }else if (arrOne[i]===arrTwo[i]){
    newArray.push(arrOne[i]);
  }

}
console.log(newArray);

