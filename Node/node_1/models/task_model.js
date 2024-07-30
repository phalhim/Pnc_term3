const fs = require('fs');


function load() {
    return JSON.parse(fs.readFileSync("task.json"));
}

function save(data) {
    fs.writeFileSync('task.json', JSON.stringify(data))
}

function getAlltask() {
    const tasks = load();
    return tasks
    
}

function show(id){
    const tasks=load();
    const task=tasks.find(task=>task.id===id);
    return task;
}

function store(newTask){
    const tasks=load();
    const task={
        id:tasks.length+1,
        name:newTask.name,
        complete:newTask.complete
    }
    tasks.push(task);
    save(tasks);
    return task;
}

function destory(id){
    const tasks=load();
    const index=tasks.findIndex(task=>task.id===id);
    console.log(index);
}
// module.exports.show = show;
module.exports={
    getAlltask,
    show,
    store,

}