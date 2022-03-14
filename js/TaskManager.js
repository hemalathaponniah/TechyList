class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, description, assignedTo, dueDate, status = "TODO") {
    const taskObj = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };

    this.tasks.push(taskObj);

    console.log(this.tasks);
  }
}

const newTask = new TaskManager();
newTask.addTask("study", "finalproject", "val", "Sunday");
 console.log(newTask);


newTask.addTask("study", "finalproject", "hema", "Sunday");

