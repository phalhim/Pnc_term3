
const clearInput = () => {
   //TODO: Clear data from input 
   
}

const createRow = (events) => {
   // TODO: Create new row with data from input field
   let click =genders.checked ? genders.values: 'Female';
   
   const trRow = document.createElement('tr')

   const tdFirstName = document.createElement('td')
   tdFirstName.textContent = firstName.value;

   const tdLastName = document.createElement('td')
   tdLastName.textContent = lastName.value;

   const tdProvince = document.createElement('td')
   tdProvince.textContent = province.value;

   const tdGenders = document.createElement('td')
   tdGenders.textContent = genders.values;

   const tdSkills = document.createElement('td')
   tdSkills.textContent = skills.values;

   const tdComment = document.createElement('td')
   tdComment.textContent = comment.value;
  


   trRow.appendChild(tdFirstName)
   trRow.appendChild(tdLastName)
   trRow.appendChild(tdProvince)
   trRow.appendChild(tdGenders)
   trRow.appendChild(tdSkills)
   trRow.appendChild(tdComment)

   tbody.appendChild(trRow)
   clearInput()
}



// Main
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const province = document.querySelector('#province');
const genders = document.querySelectorAll('input[type="radio"]');
const skills = document.querySelectorAll('.skill');
const comment = document.querySelector('#comment');
const tbody = document.querySelector('tbody');
const btnSubmit = document.querySelector('button');

// TODO: add event listeners to submit button
btnSubmit.addEventListener('click', (e) => {
   e.preventDefault();
   createRow();
});

