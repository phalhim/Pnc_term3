// Main code 


function remon() {

    const poster = document.createElement('div');
    poster.className = 'poster'

    const posterImg = document.createElement('div')
    posterImg.className = 'poster-img';

    const img = document.createElement('img')
    img.src = 'images/poster.jpg'

    const posterText = document.createElement('div')
    posterText.className='poster-text'
    
    const h1 = document.createElement('h1')
    h1.textContent = 'កង្រីជាតិថ្មី'

    const p = document.createElement('p')
    p.textContent = ' រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម និងសៀវភៅរូបភាពសំរាប់កុមារជាដើម។'



    posterText.appendChild(h1)
    posterText.appendChild(p)
    posterImg.appendChild(img)
    poster.appendChild(posterImg)
    poster.appendChild(posterText)
    container.appendChild(poster)
}

const container = document.querySelector('.container');

for (let i = 0; i < 10; i++) {
    remon()
}

