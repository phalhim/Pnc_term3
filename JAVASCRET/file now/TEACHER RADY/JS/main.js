// let headingOne =document.querySelector("h1");
// console.log(headingOne);

// console.log(headingOne.textContent);

// headingOne.textContent = 'banana';



//____________ដាក់ឈ្មោះ _________
// let headingOne = document.createElement('h1');
// console.log(headingOne);
// headingOne.textContent = 'Banana';

// document.body.appendChild(headingOne)


//__________print 100 h1____________
// for (let i = 1; i <= 100; i++) {
//     let headingOne = document.createElement('h1');
//     headingOne.textContent = 'Banana'+i;
//     document.body.appendChild(headingOne)
// }

//______coler bg___
//addEventListenerប្រើសម្រាប់​ click 

// function changeColer (){
//     document.body.style.background=("pink");
// }
// window.addEventListener("click",changeColer)


// ___________have button________

// function changeColer (){
//     document.body.style.background=("black");
// }
// const btn =document.querySelector('button')
// btn.addEventListener("click",changeColer)


//_______________changeHeading______
// function changeHeading(){
//     h1.textContent ="New text content";
// }
// const btn = document.querySelector("button");
// const h1 =document.querySelector('h1');
// btn.addEventListener('click',changeHeading)



//_________number______
// let numbber =Math.random()*10;
// console.log(number);

// let n = Math.floor(Math.random() *10);
// console.log(n);

//_________យើងចុចឲ្យវាដើរ___________
// let colers=["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
// let result="#"
// for (let i = 0; i<6; i++){
//     let index  = Math.floor(Math.random() *15);
//     result += colers[index]
// }

// console.log(result);
// document.body.style.backgroundColor =result

//________ដើរខ្លួនឯង_________________________
// function changeColer() {
//     let colers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
//     let result = "#"
//     for (let i = 0; i < 6; i++) {
//         let index = Math.floor(Math.random() * 15);
//         result += colers[index]
//     }
//     document.querySelector('h1').textContent=result;
//     document.body.style.backgroundColor = result
// }
// setInterval(changeColer,1000)
