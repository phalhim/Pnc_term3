document.addEventListener("DOMContentLoaded", function () {
    const url = "http://localhost:3000";

    //========================================================================================================
    function listTasks() {
        axios.get(url + "/task")
            .then(response => {
                console.log(response.data.data);
                getTask(response.data.data)
            })
            .catch(err => {
                console.log(err);

            })
    }

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

        if (!taskIdInput.value) {
            alert("Please inter ID!");
        } else {
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
                    <p class="card-text">Status: <span class="fw-bold ${task.completed ? 'text-success' : 'text-danger'}">${task.completed ? 'Completed' : 'Incomplete'}</span></p>
                </div>
            </div> `;
        taskDetailsContainer.innerHTML = cardDetail;

    }

    //================================================================================================

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
                        <button type="button" class="btn btn-outline-success edit-task" data-task-id="${task.id}" data-bs-toggle="modal" data-bs-target="#editTaskModal">
                            Edit
                        </button>
                        <button type="button" class="btn btn-outline-warning delete-task" data-task-id="${task.id}">
                        Delete
                    </button>
                    </div>
                </div>
            </div>`;
        });
        taskID.innerHTML = cardHTML;
        // button edit =================================================================
        const editButtons = document.querySelectorAll('.edit-task');
        editButtons.forEach(button => {
            button.addEventListener('click', function () {
                const taskId = this.getAttribute('data-task-id');
                populateEditModal(taskId);
                // console.log(button.getAttribute('data-task-id'));
            });
        });

        const deleteButtons = document.querySelectorAll('.delete-task');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function () {
                const taskId = this.getAttribute('data-task-id');
                deleteTask(taskId);
                console.log(button);
            });
        });
    }

    function populateEditModal(taskId) {
        axios.get(url + "/task/" + taskId)
            .then(response => {
                const task = response.data.data;
                document.getElementById("editTaskId").value = task.id;
                document.getElementById("editTaskTitle").value = task.title;
                document.getElementById("editTaskCompleted").checked = task.completed;
            })
            .catch(err => {
                console.log(err);
            });
    }

    const updateTaskBtn = document.getElementById("updateTaskBtn");
    updateTaskBtn.addEventListener("click", function () {
        const taskId = document.getElementById("editTaskId").value;
        const taskTitle = document.getElementById("editTaskTitle").value;
        const taskCompleted = document.getElementById("editTaskCompleted").checked;

        const updatedTask = {
            title: taskTitle,
            completed: taskCompleted
        };

        axios.put(url + "/task/" + taskId, updatedTask)
            .then(response => {
                console.log("Task updated:", response.data.data);
                const modalInstance = bootstrap.Modal.getInstance(editTaskModal);
                modalInstance.hide();
                listTasks();
            })
            .catch(err => {
                console.error("Error updating task:", err);
            });
    });

    function deleteTask(taskId) {
        axios.delete(url + "/task/" + taskId)
            .then(response => {
                console.log("Task deleted:", response.data.data);
                listTasks();
            })
            .catch(err => {
                console.error("Error deleting task:", err);
            });
    }


    function claearMessage() {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = '';
    }

    function clearDeatail() {
        const taskDetailsContainer = document.getElementById("taskDetailsContainer");
        taskDetailsContainer.textContent = '';
    }


    // function create card =========================================================================================================================
    //function getTask axios
    function createTask(data) {
        axios.post(url + "/task", data)
            .then(response => {
                console.log(response.data.data);
                const modalInstance = bootstrap.Modal.getInstance(createTaskModal);
                modalInstance.hide();
                listTasks()

            })
            .catch(err => {
                console.log(err);
            })
    }
    const createTaskBtn = document.getElementById('createTaskBtn');
    createTaskBtn.addEventListener('click', function () {
        const taskTitleInput = document.getElementById('taskTitleInput').value;
        const taskCompletedInput = document.getElementById('taskCompletedInput').checked;
        const newTask = {
            title: taskTitleInput,
            completed: taskCompletedInput
        }
        document.getElementById('taskTitleInput').value = '';
        document.getElementById('taskCompletedInput').checked = '';
        createTask(newTask);

    })
    listTasks()

})

