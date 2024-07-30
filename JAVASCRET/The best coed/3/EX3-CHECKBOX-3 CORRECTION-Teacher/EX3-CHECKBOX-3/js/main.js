function getValue(elements) {
    let result = []
    for (let element of elements) {
      if (element.checked) {
        result.push(element.value)
      }
    }
    return result
  }
  
  function showImages() {
    // console.log(getValue(categories));
    let arrays = getValue(categories);
    for (const image of images) {
      // console.log(image.getAttribute('data-categories'));
      if (arrays.includes(image.getAttribute('data-categories')) || arrays.length === 0) {
        // console.log('yes');
        image.style.display = 'block';
      }else{
        // console.log('no');
        image.style.display = 'none'
      }
    }

  }
  
  // Main
  const images = document.querySelectorAll('.image');
  const categories = document.querySelectorAll('.category');
  
  for (let category of categories) {
    category.addEventListener('change', showImages);
  }
  