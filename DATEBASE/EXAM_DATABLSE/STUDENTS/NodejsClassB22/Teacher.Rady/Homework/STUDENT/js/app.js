function requestImage(event) {
  event.preventDefault();

  // TODO 1 : define the full URL to request the image information entered in the input
  const keys = "14001068-da63091f2a2cb98e1d7cc1d82";
  let url = "https://pixabay.com/api/videos/?key=" + keys + "&q="+ searchInput.value; // TODO: add API Key and value that we get from input
  // We call teh request the URL
  axios.get(url).then((response)=>{
    // if response succeeded\
    const postImage=document.querySelector('.post-img');
    postImage.remove();

    console.log(response.data.hits);
    let datas= response.data.hits
    // TODO: get data from response and display it to browser 
let poster =document.createElement('video');
poster.classList.add('post-img');

    for(let data of datas)
{
  const video = document.createElement('video');
  video.src= data.videos.large.url;
  video.setAttribute('controls','');
  post.appendChild(video);
}
post.appendChild(poster);
    // remove the post-img div

    // create new post-img div with class post-img

    // display image to browser
  })

  .catch((error) => {
    // if response failed
    console.log(error.data);
  });
}
const post = document.querySelector(".post");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", requestImage);
