const checkboxs = document.querySelectorAll('.category')
const imgs = document.querySelectorAll('.image')

for (const checkbox of checkboxs) {
    checkbox.addEventListener('change', showBox)
}

function showBox() {
    let array = getValue(checkboxs)
    for (const img of imgs) {
        if (array.includes(img.getAttribute('data-categories')) || array.length === 0) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    }
}

function getValue(elemnets) {
   let result =[]
    for (const elemnet of elemnets) {
        if (elemnet.checked) {
            result.push(elemnet.value)
        } 
    }
    return result
}