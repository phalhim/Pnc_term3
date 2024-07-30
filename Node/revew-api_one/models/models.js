const { log } = require('console');
const fs = require('fs');
const { title } = require('process');

//  read file
function load() {
    // call file tasks
    return JSON.parse(fs.readFileSync("task.json"));
}

// save data to file (write file to disk)
function save(data) {
    fs.writeFileSync('task.json', JSON.stringify(data));
}

// function get all tasks
function getAllTasks(title = null) {
    const tasks = load();
    if (title) {
        return tasks.filter(task => task.title.toLowerCase().includes(title.toLowerCase()));
    }
    return tasks;
}

// call id of file (get specific data by id)
function show(id) {
    const tasks = load();
    const task = tasks.find(task => task.id === id);
    return task;
}

// function create task 
function store(newTask) {
    const tasks = load();
    const task = {
        id: tasks.length + 1,
        title: newTask.title,
        completed: newTask.completed,
    }
    tasks.push(task);
    save(tasks)
    return task;
}

// function of the task dalete
function destroy(id) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        save(tasks);
        return true;
    }
}


// function of the task update
function update(id, data) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const task = { ...tasks[index], ...data };
        tasks[index] = task;
        save(tasks);
        return task;
    }
}

// function of the task update
function updateStatus(id, status) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        console.log(tasks[index].completed);
        console.log(status.completed);
        tasks[index].completed = status.completed;
        save(tasks);
        return status;
    }
}

// function task completed true
function isCompleted(id) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== - 1) {
        tasks[index].completed = true;
        save(tasks);
        return tasks[index].completed;
    }
}

// function completed false
function isNotCompleted(id) {
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== - 1) {
        tasks[index].completed = false;
        save(tasks);
        return tasks[index].completed;
    } else {
        const show = show();
        const taskShow = tasks.find(task => task.id === id);
        return show[taskShow].completed;
    }
}

// function completed all tasks true
function listTasksCompleted() {
    const tasks = load();
    const index = tasks.filter(task => task.completed === true);
    return index;
}

// function completed all tasks false
function listNotTasksCompleted() {
    const tasks = load();
    const index = tasks.filter(task => task.completed === false);
    return index;
}

module.exports.getAllTasks = getAllTasks;
module.exports.showTask = show;
module.exports.save = save;
module.exports.store = store;
module.exports.destroy = destroy;
module.exports.update = update;
module.exports.updateStatus = updateStatus;
module.exports.isCompleted = isCompleted;
module.exports.isNotCompleted = isNotCompleted;
module.exports.listTasksCompleted = listTasksCompleted;
module.exports.listNotTasksCompleted = listNotTasksCompleted;


// api related read file
// - get all data
// -get specific data by id
// -using methods: find, findIndex, filter, includes

// api related write file
// -create data
// -update data
// -delete data