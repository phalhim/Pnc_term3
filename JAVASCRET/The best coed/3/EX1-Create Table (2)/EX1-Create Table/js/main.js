function createRow(data) {
    // TODO:
    const trRow =document.createElement('tr')

    // create tr element 
    // create tdId, tdName, tdEmail, tdPhone, tdAction and btn element following the format in html file
    const tdId =document.createElement('td');
    tdId.textContent= data.id

    const tdName = document.createElement('td');
    tdName.textContent=data.name

    const tdEmail = document.createElement('td');
    tdEmail.textContent=data.email

    const  tdPhone = document.createElement('td');
    tdPhone.textContent=data.phone

    const tds =document.createElement('td')
    const btn =document.createElement('button');
    btn.className='btn btn-danger'
    btn.textContent='delete'
    tds.appendChild(btn)

    // add text content to tdId, tdEmail, tdPhone, tdName, and add btn to tdAction
    trRow.appendChild(tdId)
    trRow.appendChild(tdName)
    trRow.appendChild(tdEmail)
    trRow.appendChild(tdPhone)
    trRow.appendChild(tds)
    // append tdId, tdName, tdEmail, tdPhone, tdAction to tr
    // append tr to tbody 
    tbody.appendChild(trRow)
}


// main
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

const tbody = document.querySelector('tbody');
for (let student of students) {
    createRow(student)
}