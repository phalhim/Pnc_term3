
const  clearInput = () => {
   //TODO: Clear data from input field
   firstName.value = '';
   lastName.value = '';
   comment.value = '';
   province.value = ''
   for (const gender of genders) {
      gender.checked = false
   }
   for (const skill of skills) {
      skill.checked = false
   }
}

const createRow = (event) => {
   event.preventDefault()
   console.log(firstName.value);
   // TODO: Create new row with data from input field
   let tr = document.createElement('tr');
   let tdFirtName = document.createElement('td');
   let tdLastName = document.createElement('td');
   let tdProvine = document.createElement('td');
   let tdGender = document.createElement('td');
   let tdSkill = document.createElement('td');
   let tdComment = document.createElement('td');

   tdFirtName.textContent = firstName.value;
   tdLastName.textContent = lastName.value;
   tdProvine.textContent = province.value;
   tdComment.textContent = comment.value;

   for (const gender of genders) {
      if (gender.checked) {
         tdGender.textContent = gender.value;
      }
   }
   let resultCheckBox = '';
   for (const skill of skills) {
      if (skill.checked) {
         resultCheckBox += skill.value +','
      }
   }
   tdSkill.textContent = resultCheckBox;
   console.log(resultCheckBox);

   tr.appendChild(tdFirtName);
   tr.appendChild(tdLastName);
   tr.appendChild(tdProvine);
   tr.appendChild(tdGender);
   tr.appendChild(tdSkill);
   tr.appendChild(tdComment);
   tbody.appendChild(tr);
   clearInput();
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
btnSubmit.addEventListener('click',createRow)