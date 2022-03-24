const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
  const taskHtml = `
            <div class="pt-2">
              <div class="card" id="idoftask" data-task-id = ${id} >
              <div class= "card-header p-3 fw-bold text-center  fs-4 ">
              ${name}
              </div>
              <div class="card-body ">
              <p class="fw-light">Description: ${description}</p>
              <p class="fw-light"> Assigned To: ${assignedTo}.</p>
              <p class="fw-light">Due Date: ${dueDate}</p>
              <p class="fw-bold">Status: ${status}</p>
              <button type="button" class="btn-sm btn btn-success done-button">Mark as Done</button>
              <button type="button" class="btn-sm btn btn-danger delete-button">Delete</button>

              </div>
            </div>
            </div>
           `;

  return taskHtml;
};

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, description, assignedTo, dueDate, status = "TODO") {
    // this.currentId++;
    const taskObj = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };

    this.tasks.push(taskObj);
  }
  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJson);
    const currentId = JSON.stringify(this.currentId);
    localStorage.setItem("currentId", currentId);

    //localStorage.setItem('tasks', JSON.stringify(tasksJson));
    //localStorage.setItem('currentId', JSON.stringify(currentId));
  }
  load() {
    if (
      localStorage.getItem("tasks") !== null &&
      localStorage.getItem("currentId") !== null
    ) {
      const tasksJson = localStorage.getItem("tasks");
      this.tasks = JSON.parse(tasksJson);
      const currentId = localStorage.getItem("currentId");
      this.currentId = Number(currentId);
    } else {
      console.log("No Localstorage");
    }
  } //if (localStorage.getItem('currentId') !==null ){
  // const currentId = localStorage.getItem('currentId');
  //this.currentId = Number(currentId);
  //} //else {
  // console.log("localstorage is empty");
  //}
  //}

  render() {
    const tasksHtmlList = [];

    for (let i = 0; i < this.tasks.length; i++) {
      const currentTask = this.tasks[i];

      const date = new Date(currentTask.dueDate);
      // console.log(date);
      const formattedDate = date.toString();

      // console.log(formattedDate);
      const taskHtmlS = createTaskHtml(
        currentTask.id,
        currentTask.name,
        currentTask.description,
        currentTask.assignedTo,
        currentTask.dueDate,
        currentTask.status
      );
      tasksHtmlList.push(taskHtmlS);
    }

    const getval = document.getElementById("tasksList");
    const taskHtml1 = tasksHtmlList.join("\n");
    getval.innerHTML = taskHtml1;
  }

  getTaskById(taskId) {
    let foundTask;
    for (var i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id == taskId) {
        foundTask = task;
      }
    }
    return foundTask;
  }
  deleteTask(taskId) {
    const newTasks = [];
    for (var i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
    this.tasks = newTasks;
  }
  render() {
    const tasksHtmlList = [];
    for (let i =0; i<this.tasks; i++){
      const currentTask = this.tasks[i];
      const date = new Date(this.dueDate);
      const formattedDate = date.toString();
      const taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo,  currentTask.status, formattedDate);
      tasksHtmlList.push(taskHtml);
      
    
  }
  const getval = document.getElementById("listelement")
  const taskHtml1 = tasksHtmlList.join('\n');
  getval.innerHtml =taskHtml1;
//console.log(currentTask[i]);
}
<<<<<<< HEAD

 const newTask = new TaskManager();
 newTask.addTask("study", "finalproject", "val", "Sunday");
  console.log(newTask);
newTask.render();

// newTask.addTask("study", "finalproject", "hema", "Sunday");
const createTaskHtml = (name, description, assignedTo, dueDate, Status) => {
  const taskHtml = `
               <h4 class="card-title">Task Schedule</h4>
               <ul id ="listelement">
               <li class ="display">${name}</li>
               <li class ="display">${description}</li>
               <li class ="display">${assignedTo}</li>
               <li class ="display">${dueDate}</li>
               <li class ="display">${Status}</li>
               <a class="btn btn-primary" href="Work-in-Progress.html" role="button" id ="button2">Work In Progress</a>
               <button id ="button1" class="btn btn-primary" type="submit">Mark As Done</button>
           </div>
           `; 
       //return `${name}, ${description}, ${assignedTo}, ${dueDate}, ${Status}`;
       console.log(taskHtml);  
   }
    createTaskHtml();
=======
>>>>>>> a230b857754d57bb45815a192361ef82629011c7
