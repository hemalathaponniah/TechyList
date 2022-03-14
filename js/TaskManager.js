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


  //render method
  //Create a variable storing an empty array to hold the HTML of all the tasks' html, tasksHtmlList.
  //loop over this.tasks with a for loop (need to access current index of array i )
  //set current task in loop to a variable this.tasks[i]
  //create a date var
  //format date turn it into a string
  //const taskhtml = createTaskHtml(currentTask.name, and formattedDate, status)
  //taskHtmllist.push(taskHtml) end for loop
  //
}

// const newTask = new TaskManager();
// newTask.addTask("study", "finalproject", "val", "Sunday");
//  console.log(newTask);


// newTask.addTask("study", "finalproject", "hema", "Sunday");


