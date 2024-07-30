function afterSuccess(response) {
  // log the data from the response
 console.log(response.data)

}

function afterFailed(error) {

  if (response =error){
    console.log("Missing 'name' parameter");

  }else{
  // 2 - TODO log the error message
  console.log("Message: name is can show you here")
  }

}
// 1 - TODO change the request to produce an ERROR
let request = "https://api.genderize.io?s=ronan";
axios.get(request).then((response)=>{
  console.log(response.data);
}).catch((error)=>{
  
  console.log(error.response.data.error);
  let message= error.response.data.error;
  let p = document.createElement('p');
  p.textContent=message;
  document.body.appendChild(p);

});
axios.get(request).then(afterSuccess).catch(afterFailed);
