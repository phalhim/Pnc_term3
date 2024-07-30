const { log } = require('console');
const fs = require('fs');
const { get } = require('http');

function load() {
    return JSON.parse(fs.readFileSync("task.json"));
}

function save(data) {
    fs.writeFileSync("task.json", JSON.stringify(data));
}

function getAllTasks() {
    const tasks = load();
    return tasks;
}

function store(newTask) {
    const tasks = load();
    const task = {
        id: newTask.length,
        title: newTask.title,
        completed: newTask.completed,
    }
    tasks.push(task);
    save(tasks);
    return task;
}

module.exports.getAllTasks = getAllTasks;
module.exports.save = save;
module.exports.store = store;