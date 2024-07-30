const tbody =document.querySelectorAll('tbody tr');
const deletes = document.querySelectorAll('button')
console.log(tbody)

for (let text of deletes) {
    text.addEventListener("click",function(){
        text.parentElement.parentElement.remove()
    })
}