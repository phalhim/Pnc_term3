let students = [
    {
        id: 1,
        name: "John",
        email: "john@example.com",
        phone: "123-456-3303"
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@example.com",
        phone: "123-456-3304"
    },
    {
        id: 3,
        name: "Mary",
        email: "mary@example.com",
        phone: "123-456-3305"
    },
    {
        id: 4,
        name: "Peter",
        email: "peter@example.com",
        phone: "123-456-3306"
    },
    {
        id: 5,
        name: "Lisa",
        email: "lisa@example.com",
        phone: "123-456-3307"
    }
];

function createRow(student) {

    let tableRow = document.createElement('tr')

    let tdId = document.createElement('td');
    tdId.textContent = student.id;

    let tdName = document.createElement('td');
    tdName.textContent = student.name;

    let tdEmail = document.createElement('td');
    tdEmail.textContent = student.email;

    let tdphone = document.createElement('td');
    tdphone.textContent = student.phone;

    let del = document.createElement('td');
    let btn = document.createElement('button');
    btn.className = 'detail';
    btn.classList.add('btn-primary');
    btn.textContent = 'Detail';

    tableRow.appendChild(tdId);
    tableRow.appendChild(tdName);
    tableRow.appendChild(tdEmail);
    tableRow.appendChild(tdphone);
    tableRow.appendChild(del)
    del.appendChild(btn)

    tbody.appendChild(tableRow)
}

function showStudentDetails(student) {

}

// Main
const tbody = document.getElementById('studentsTableBody');
for (let student of students) {
    createRow(student);
}