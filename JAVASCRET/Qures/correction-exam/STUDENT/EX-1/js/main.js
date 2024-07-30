const createPoster = () => {
   // TODO: Create poster here
   let poster = document.createElement('div');
   poster.className = 'poster';

   let posterImg = document.createElement('div');
   posterImg.className = '"poster-img';

   let img = document.createElement('img');
   img.src = 'images/poster.jpg';

   let posterText = document.createElement('div');
   let h1 = document.createElement('h1');
   h1.textContent = 'កង្រីជាតិថ្មី';
   
   let p = document.createElement('p');
   p.textContent = 'រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម និង សៀវភៅរូបភាពសំរាប់កុមារជាដើម។';

   posterText.appendChild(h1);
   posterText.appendChild(p);
   posterImg.appendChild(img);
   poster.appendChild(posterImg);
   poster.appendChild(posterText);
   container.appendChild(poster);
}

// Main code 
const container = document.querySelector('.container');
// TODO:  Call function to create 10 poster here
for (let i = 0; i < 10; i++) {
   createPoster();
   console.log(i);
}