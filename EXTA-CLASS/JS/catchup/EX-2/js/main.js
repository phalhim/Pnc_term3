function redom() {
    const navbar = document.querySelectorAll('li a')
    let navText = []
    for (let nav of navbar) {
        navText.push(nav.textContent)
    }
    console.log(navText);

    let index = Math.floor(Math.random() * navText.length)
    const h1Text = document.querySelector('h1')
    h1Text.textContent = navText[index]
}
setInterval(redom,100)