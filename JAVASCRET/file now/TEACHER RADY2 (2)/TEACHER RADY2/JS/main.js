// _________# = id____________
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const imgs =document.querySelector("img");

// btnLeft.addEventListener("click", function () {
//     img.classList.add("chang_direction");
// });

// btnRight.addEventListener("click", function () {
//     img.classList.remove("chang_direction");
// });

//_________toggle ចុចទី១​ add ចុចទី២ Remove មានការត្រឡប់___

imgs.addEventListener("click", function(){
    imgs.classList.toggle("chang_direction");
});

//____________បិទ​ បើក រូប____________
// const img = document.querySelector("img");
// const btn =document.querySelector("button");
// btn.addEventListener("click", function(){
//     imgs.classList.toggle("hide");
// });

//_________change text coler____
// const bnt = document.querySelector("button");//_______btn_______
// const changH1 = document.querySelector("h1");//________ដើម_______
// bnt.addEventListener("click", function () {//________ btn____(=> = function)
//     changH1.classList.toggle("text_coler");//_____chang____
// });



// const createCard = () => {
//     const card = document.createElement("div");
//     card.className = "card";

//     const cardBody = document.createElement("div");
//     cardBody.className = "card-body";

//     const img = document.createElement("img");
//     img.src = "beautiful-cat_890746-12850.avif";

//     const cardFooter = document.createElement("div");
//     cardFooter.className = "card-footer";

//     const cardTitle = document.createElement("h1");
//     cardTitle.textContent = "Hello world";

//     const cardText = document.createElement("p");
//     cardText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga dicta sapiente architecto ad, impedit doloremque, molestiae laborum officia eos hic eligendi corrupti.";

//     card.appendChild(cardBody);
//     card.appendChild(cardFooter);
//     cardBody.appendChild(img);
//     cardFooter.appendChild(cardTitle);
//     cardFooter.appendChild(cardText);

//     return card;
// }

// const container = document.querySelector(".container");
// for (let i = 0; i < 20; i++) {
//     container.appendChild(createCard());
// }

