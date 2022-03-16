const createTaskHtml = (name, description, assignedTo, dueDate, Status) => {
  const taskHtml = `
               <h4 class="card-title">Task Schedule</h4>
               <li class ="display">${name}</li>
               <li class ="display">${description}</li>
               <li class ="display">${assignedTo}</li>
               <li class ="display">${dueDate}</li>
               <li class ="display">${Status}</li>
               <button type="button" class="btn-sm btn-success">Mark as Done</button>
                     
           `;
  //return `${name}, ${description}, ${assignedTo}, ${dueDate}, ${Status}`;
  return taskHtml;
};
// createTaskHtml();

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

    // console.log(this.tasks);
  }
  render() {
    const tasksHtmlList = [];

    for (let i = 0; i < this.tasks.length; i++) {
      const currentTask = this.tasks[i];
      const date = new Date(currentTask.dueDate);
      console.log(date);
      const formattedDate = date.toString();
      console.log(formattedDate);
      const taskHtmlS = createTaskHtml(
        currentTask.name,
        currentTask.description,
        currentTask.assignedTo,
        formattedDate, currentTask.status
      );
      tasksHtmlList.push(taskHtmlS);

      console.log(tasksHtmlList);
    }
    console.log(tasksHtmlList);
    const getval = document.getElementById("listelement");
    const taskHtml1 = tasksHtmlList.join("\n");
    getval.innerHTML = taskHtml1;
    //console.log(currentTask[i]);
    console.log(taskHtml1);
  }
}

