const fs = require('fs');

function load() {
    return JSON.parse(fs.readFileSync('task.json'));
}

function save(data) {
    fs.writeFileSync('task.json', JSON.stringify(data));
}

function getAllTask() {
    const tasks = load();
    return tasks;
}

function show(id) {
    const tasks = load();
    const index = tasks.find(task => task.id === id);
    return index;
}

function store(newTask) {
    const tasks = load();
    const task = {
        id: newTask.id,
        name: newTask.name,
        completed: newTask.completed
    }

    tasks.push(task);
    save(tasks);
    return task;
}

module.exports = {
    getAllTask,
    show,
    store,

}