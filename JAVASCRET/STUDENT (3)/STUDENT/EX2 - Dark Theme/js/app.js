function changeTheme() {
    // TODO 
    // select classlist and toggle to dark theme 
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_toggle
    let body=document.querySelector('body');
    body.classList.toggle('dark-theme')
}
let theme = document.getElementById("s1-14");
theme.addEventListener("click", changeTheme);