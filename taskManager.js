let form =document.getElementById("formSubmission");

let table=document.getElementById("formSubmission");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
  let taskname = document.getElementById("taskName").value;
    let taskdescription = document.getElementById("description").value;
    let assignedTo = document.getElementById("assignedTo").value;
    let date1 = document.getElementById("date1").value;


  let newArray = [taskname,taskdescription,assignedTo, date1];
  newArray.forEach((item)=>{
  var list = document.createElement("list");
  var text = document.createTextNode(item);
  list.appendChild(text);
  table.appendChild(list);
  })
  form.reset(); 
}

function workInProgress(){
  let workInProgress = "status: Work in Progress";
  document.getElementById("status").innerHTML=workInProgress;
  document.getElementById("status").style.color="green";
}
function markAsDone(){
  let markAsDone = "status: Work Completed";
  document.getElementById("status").innerHTML=markAsDone;
  document.getElementById("status").style.color="green";
}