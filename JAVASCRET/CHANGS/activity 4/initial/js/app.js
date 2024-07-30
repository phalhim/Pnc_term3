let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
let children3 =container1.lastElementChild
container2.appendChild(children3)

//  2- Remove item 4
let children1=container2.firstElementChild;
children1.remove();
// 3- Create a new item 10 and add it to container 3
let addChild= document.createElement("div");
addChild.className="item"
addChild.textContent=10
container3.appendChild(addChild)
//  4- Set all item in blue containers  background color to  red
let redContainers=document.querySelectorAll(".containerBlue");
for (let background of redContainers) {
    background.style.color="red";
}