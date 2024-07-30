document.addEventListener("DOMContentLoaded", function () {
    const url = "http://localhost:3000";
    axios.get(url + "/task")
        .then(response => {
            console.log(response.data.data);
            getTask(response.data.data)
        })
        .catch(err => {
            console.log(err);
        })

    function showTask(id) {
        axios.get(url + "/task/" + id)
            .then(response => {
                console.log(response.data.data);
                getTaskDetail(response.data.data)
                claearMessage();
            })
            .catch(err => {
                console.log(err.response);
                if (err.response.status == 404) {
                    console.log(err.response.data.message);
                    const errorMessage = document.getElementById("errorMessage");
                    errorMessage.textContent = err.response.data.message;
                    clearDeatail();
                }
            })
        }
        const getTaskBtn = document.getElementById("getTaskBtn");
        getTaskBtn.addEventListener('click', function () {
        const taskIdInput = document.getElementById("taskIdInput");
        console.log(taskIdInput.value);
        showTask(taskIdInput.value);
        
        if(!taskIdInput.value) {
            alert("Please inter ID!");
        }else{
            getTask(taskIdInput.value);
        }
        
    })


    function getTaskDetail(task) {
        const taskDetailsContainer = document.getElementById('taskDetailsContainer');
        let cardDetail = '';
        cardDetail =
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">${task.title}</h5>
                    <p class="card-text">Status: <span class="fw-bold ${task.completed ? 'text-success' : 'text-danger'}">${task.completed ? 'Completed' : 'Incompleted'}</span></p>
                </div>
            </div> `;
        taskDetailsContainer.innerHTML = cardDetail;

    }



    function getTask(tasks) {
        const taskID = document.getElementById("taskID");
        let cardHTML = '';
        tasks.forEach(task => {
            cardHTML += 
            `<div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${task.title}</h5>
                        <p class="card-text">Status: <span class="fw-bold ${task.completed ? 'text-success' : 'text-danger'}">${task.completed ? 'Completed' : 'Incomplete'}</span></p>
                    </div>
                </div>
            </div>`;
        });
        taskID.innerHTML = cardHTML;
    }

    function claearMessage() {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = '';
    }

    function clearDeatail() {
        const taskDetailsContainer = document.getElementById("taskDetailsContainer");
        taskDetailsContainer.textContent = '';
    }
})