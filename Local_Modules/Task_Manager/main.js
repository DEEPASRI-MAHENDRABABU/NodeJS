const taskManager=require('./taskManager');


//Add task
taskManager.addTask('NodeJS');
taskManager.addTask('ExpressJs');
taskManager.addTask('MongoDB');

//View all task

console.log("ALL TASKS "  ,taskManager.getAllTasks());

//Getting task by Id

taskManager.markAsComplete(2);

console.log("UPDATED TASK " ,taskManager.getAllTasks());

