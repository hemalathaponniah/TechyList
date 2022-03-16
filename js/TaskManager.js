
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

 



// const newTask = new TaskManager();
// newTask.addTask("study", "finalproject", "val", "Sunday");
//  console.log(newTask);


// newTask.addTask("study", "finalproject", "hema", "Sunday");

