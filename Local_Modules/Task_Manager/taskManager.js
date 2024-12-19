let tasks=[];

function addTask(name){
    const newTask={
        id:tasks.length+1,
        task : name,
        completed :true

    };
    tasks.push(newTask);
    return tasks;

}

function markAsComplete(id){
    const task=tasks.find(task=> tasks.id===id);
    if(task){
        task.completed=true;
        return task;
    }
    return null;

}

function getAllTasks(){
    return tasks;
}

module.exports={addTask,markAsComplete,getAllTasks};