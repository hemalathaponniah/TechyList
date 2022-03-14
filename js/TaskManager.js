const createTaskHtml = (name, description, assignedTo, dueDate, Status) => {
 return `
             <h4 class="card-title">Task Schedule</h4>
             <ul id ="display">
             <li id ="p2">${name}</li>
             <li id ="p3">${description}</li>
             <li id ="p1">${assignedTo}</li>
             <li id ="p4">${dueDate}</li>
             <li id ="p5">${Status}</li>
             <a class="btn btn-primary" href="Work-in-Progress.html" role="button" id ="button2">Work In Progress</a>
             <button id ="button1" class="btn btn-primary" type="submit">Mark As Done</button>
         </div>
         `; 
     //return `${name}, ${description}, ${assignedTo}, ${dueDate}, ${Status}`;
      console.log(taskHtml);    
 }
 //createTaskHtml('h','hd', 'a', '01-mar-22', 's');
 


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
    const taskHtmlList = [];
    taskHtmlList.forEach(this.tasks => {
        // Store the current task in a variable - What should I do?
        const date = new Date(dueDate);
        const formattedDate = date.toString();
        console.log(formattedDate); 
        const taskHtml = createTaskHtml(formattedDate)        
        taskHtmlList.push(taskHtml);
    }); 
const taskHtml1 = taskHtmlList.join('\n');
document.getElementById("display").innerHTML = taskHtml1;
  }
}

// const newTask = new TaskManager();
// newTask.addTask("study", "finalproject", "val", "Sunday");
//  console.log(newTask);


// newTask.addTask("study", "finalproject", "hema", "Sunday");


