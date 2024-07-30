
let afterRequest = (response) => {
  const token ="5209560-2af4ef736c4deccb0a984c338";
  const searchInput = document.querySelector('input');
  const URL = `https://pixabay.com/api/?key=${token}&q=${searchInput}&image_type=photo&pretty=true`;
  // todo
  if(response.data){
    response.data.forEach(user => {
      
    });
  }
};

// axios here

axios
.get(URL)
.then(afterRequest)
.catch(error =>{
  console.log('Enter agin');
})