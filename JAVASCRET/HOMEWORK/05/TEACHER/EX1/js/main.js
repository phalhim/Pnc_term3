let text = "hello world [JavaScript] we [are] strong!";
let isBracket = false;
let result = "";
for (let char of text) {
    if (char == "[") {
        isBracket = true;
    }else if (char == "]") {
        isBracket = false;
    }else if (!isBracket) {
        result += char;
    }
}
console.log(result);