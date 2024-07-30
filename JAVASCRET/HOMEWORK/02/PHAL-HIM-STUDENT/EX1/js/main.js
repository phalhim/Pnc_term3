
// TODO: 
// YOUR CODE HERE
let text="hello world [JavaScript] we [are] strong!"
    let newText = ""
    let res = true
    for (let word of text ){
        if (word != "[" && res){
            newText += word
        }else if (word == "[" ){
            res = false
        }else if (word == "]"){
            res = true
        }
    }
console.log(newword());
// output: hello world we strong!


