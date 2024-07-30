const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const img =document.querySelector("img")


btnLeft.addEventListener("click",function(){

    img.classList.add("chang_direction")
})

btnRight.addEventListener("click",function(){
    img.classList.remove("chang_direction")
})