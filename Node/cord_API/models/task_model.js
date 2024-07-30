const fs = require('fs');

function load() {
    return JSON.parse(fs.readFileSync('task.json'))
}

function save(data) {
    fs.writeFileSync('task.json', JSON.stringify(data));
}

function getAlltask() {
    const tasks = load();
    return tasks;
}

function show(id) {
    const tasks = load();
    const task = tasks.find(task => task.id === id);
    return task;
}

function store(newTask) {
    const tasks = load();
    const task = {
        id: newTask.id,
        name: newTask.name,
        completed: newTask.completed,
    }
    tasks.push(task);
    save(tasks);
    return task;
}


function destory(id) {
    const tasks = load();
    const index = tasks.find(task => task.id === id);
    if(index !==-1){
        tasks.splice(index, 1);
        save(tasks);
        return true;
    }

}

function update(id) {
    const tasks = load();
    const index = tasks.find(task => task.id === id);
    if(index!== -1){
        const task = tasks[index];
        return task;
    }else{
        return false;
    }
}

module.exports = {
    getAlltask,
    show,
    store,
    destory,
    update,
}