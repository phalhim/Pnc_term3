// document.getElementById("Myid").innerHTML="hello class JS"


//__________let________
// let h2= document.querySelector("h1")
// h2.innerHTML="Hello class JS"

//__________let number_________
// var number=10
// console.log(number);

//______and = &&____

// let number1 =10
// let number2 =20
// if(number1<30 && number2 >10){
//     console.log("hello")
// }

//________or = ||___________
// if (number1 => 10 || number2 > 5) {
//     console.log("Ronan")
// }



//+++++++++++++ for in++++++++++
// let number = [1,2,4,6,8]
// for (let index in number){
//     console.log(index)
// }


// let number = [1,2,4,6,8]
// for (let index in number){
//     console.log(number[index])
// }


// +++++++++++++ for of+++++++++
// let numbers = [5,6,7]
// for (let number of numbers){
//     console.log(number)
// }

// for (let i=2; i<5; i++){
//     console.log(i)
// }


// let x = prompt("")
// while (x !=5 ){
//     console.log("try again");
//     x =prompt("")
// }

// let x=8
// let y =10
// if (x<5 && y>6){
//     console.log("monday")
// }else if (x<10){
//     console.log("friday")
// }else{
//     console.log("sunday")
// }


// let x = 10
// x += 1
// console.log(x)


// console.log(10%3)

// let n1 =4
// let n2 = n1 **2
// console.log(n2)

// console.log("ronan" + "hello")

// console.log("ronan" [-2])

// const a =10;
// console.log(a)

// let numbers = [1,10,2,100]
// for (let number of numbers){
//     console.log(number)
// }

//____________in ________________
// let numbers =[1,10,2,100]
// for (let i in numbers){
//     console.log(numbers[i])
// }

// ______________10,31,2023___________

// let student ={
//     'id':1,
//     'name':"phal",
//     'age':25
// }

// for (let key in student){
//     // console.log(key);
//     // console.log(student[key])
//     console.log(key+":"+student[key]);
// }



// let student =[
//     {'id':1,'name':"phal",'age':25},
//     {'id':2,'name':"sophal",'age':35},
//     {'id':3,'name':"tyna",'age':45},
// ]
// // console.log(student[1]['name'])
// for (let student of student){
//     console.log(student["id"]+" "+student["name"]+" "+student["age"]);
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }


// let isBlack =true;
// let isWhite =true;
// isBlack=isWhite
// if (isWhite){
//     console.log("it is white");

// }else{
//     console.log("it is black");
// }


// let isFound = true;
// let i = 0;
// while (isFound) {
//     i++;
//     console.log(i);
//     if (i > 10) {
//         isFound = false
//     }

// }


// let isFound = true;
// let i = 0;
// while (isFound) {
//     console.log(i);
//     i++;
//     if (i > 10) {
//         isFound = false
//     }

// }



// let car =["toyota","kia","RR"];
// for (index in car){
//     console.log(index);
//     console.log((car[index]));
// }


// let fourAsNumber =4;
// let fourAsString ="4";
// console.log(fourAsNumber==fourAsString);



// let fourAsNumber =4;
// let fourAsString ="4";
// console.log(fourAsNumber===fourAsString);

// let x =16+"volvo"
// console.log(x);

// let x =4+16+"volvo"
// console.log(x);

// let x ="volvo"+4+16
// console.log(x);

/*night*/

// let  text ="phal"
// console.log(text.length)

// let text ="PHAL";
// console.log(text.toLowerCase());

// let text = "phal"
// console.log(text.toUpperCase());

// let numbers =[2,4,6,8]

// for (i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// for (let number in numbers){
//     console.log(numbers[number]);
// }

// for (let index of numbers){
// console.log(index);
// }

// const PI = 3.14
// let x = Number(prompt("Enter number : "))
// if (x===PI){
//     console.log(("Is Enter "));
// }

// const a =10;
// if (a<49){
//     const sum;
//     console.log(sum);
// }

// let x =5
// let y = 5
// console.log(!(x==y)&&(x>5||y<10));

// let numbers ="5"
// console.log(Number(numbers)+Number(numbers))


// let numbers =5
// console.log(String(numbers)+String(numbers))


// function sum(n1,n2) {
//     total = n1 +n2
//     return total
// }
// console.log(sum(10,20));

// let array =[]
// let fruits =["apple","banana"]
// // let array =[]

// let array = [1, 2, 3, 4, 5];
// array.splice(1, 0, 20);
// console.log(array);

// function sum(n1, n2){
//     let total = n1 + n2;
//      return total;
// }


//_______array2D_________

// let array2D =[[12,13,14,15],[3,4,5,6,3]];
// let value = array2D[0][3];
// console.log(value);


//__________call name____________
// let dic ={name:"Him",age:20}
// let names =dic["name"]
// console.log(names);


//++++++++++and+++++++++++
// let person ={
//     "name":"rady",
//     "age":29
// }
//lst way
// person["province"]="BMC"
//______2nd way___
// person.province="Trainer"
// console.log(person);

//++++++++++++ ចាប់ value++++++++++++
// let person ={
//     "name":"rady",
//     "age":29
// }
// console.log(person["name"]);
// console.log(person.age);

//+++++++++++++++ call key +++++++++++++
// let students={
//     generation:{
//         year:2021,
//         major:{
//             mobile:{
//                 teacher:"rady",
//                 coach:"ronan"
//             },
//             web:{
//                 teacher:"Him",
//                 coach: "Clement"
//             }
//         },
//         scool:"PNC"
//     }
// }
// console.log((students.generation.major.mobile));


// let teacher ={
// name:"ronan",
// age:20
// }
// delete teacher.age;
// console.log(teacher);

//__________________________________________________________________________________________
// function sum (x1,x2,x3,x4) {
//     return x1+x2+x3+x4
// }
// console.log(sum(10,10,2,10));

// let numbers =[10,10,2,10]
// function total (numbers){
//     let sum =0
//     for (let nunmber of numbers){
//         sum +=nunmber
//     }
//     return sum
// }
// console.log(total(numbers));

//____________1_____________________________________________________________________________
// let sum =(x1,x2,x3,x4)=>{
//    return x1+x2+x3+x4
// }
// console.log(sum(10,10,2,10));

// let numbers =[10,10,2,10]
// let total =(numbers)=>{
//     let sum =0
//     for (let nunmber of numbers){
//         sum +=nunmber
//     }
//     return sum
// }
// console.log(total(numbers));

//_________2________________________________________________________________________________
// let sum =(x1,x2,x3,x4)=>x1+x2+x3+x4 ;
//     console.log(sum(10,10,2,10));

