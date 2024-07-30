// Function 1 (the avg
function averageNum(num1, num2) {
  return (num1 + num2) / 2;
}
console.log("test function1:", averageNum(14, 16));

// Function 2 (as example)
// TODO
function string(n1, n2) {
  return n1 + n2
}
console.log("test function2:", string("ronan", " the best"));

// Function 3 (as example)
// TODO
const allEqual = all => all.every(val => val === all[0]);
const result = allEqual([4, 4, 4, 4])

console.log("test function3:", result);

// Function 4 (as example)
// TODO
function aString(verb, adjective) {
  student = { name: "ronan", age: 17 };
  return "student " + student.name + " " + verb + " " + student.age + " " + adjective;
}

console.log("test function4:", aString("is", "years old"));

// Function 5 (as example)
// TODO
function strLonger(s1, s2) {
  s1 = "aaa"
  s2 = "a"
  res = false
  if (s1 > s2)
    res = true
  return res
}
console.log("test function5:", strLonger());

// Function 6 (as example)
// TODO
let number = [2, 3, 4, 5]
function sum(number) {
  let sum = 0
  for (let i in number){
    sum += number[i]
  }
  
  return sum
}

console.log("test function6:", sum(number));

// Function 7 (as example)
// TODO
function array(row, column) {
  let res = []
  for (let i = 0; i < row; i++) {
    const row = Array(column).fill(0)
    res.push(row)
  }

  return res
}
console.log("test function7:", array(row = 2, column = 3));

// Function 8 (as example)
// TODO
function calculateElementSum(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    const sum = array1[i] + array2[i];
    result.push(sum);
  }

  return result;
}
console.log("test function8:", calculateElementSum([1, 2, 3], [4, 4, 4]));

