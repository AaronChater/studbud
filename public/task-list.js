

//javascript for task list

const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); 
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");

// Event listener for Button click
button.addEventListener("click", function(event) {
  event.preventDefault(); 

  let task = taskInput.value;

let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  let date = (new Date()).toLocaleDateString('en-US') //Convert to short date format

    addTask(task, dueDate, completionTime, estimatedTime, priorityRating);

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);
})

//array to store tasks
var taskList = [];

function addTask(taskDescription, createdDate, completionTime, estimatedTime, priorityRating, completionStatus) {
  let task = {
    taskDescription,
    createdDate,
    completionTime,
    estimatedTime,
    priorityRating,
    completionStatus
  };

  // Adding task to array of tasks
  taskList.push(task);

  // Separate the DOM manipulation from the object creation logic
  renderTask(task);
}

// Function to display the item on the page
function renderTask(task) {
  let item = document.createElement("li");
  item.innerHTML ="<p>" + task.taskDescription +"</p>"
    + "<p>" + task.createdDate +"</p>"
    + "<p>" + task.completionTime +"</p>"
    + "<p>" + task.estimatedTime +"</p>"
    + "<p>" + task.priorityRating +"</p>";

  tasklist.appendChild(item);

  //Delete button for dom elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Completed");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

// Remove the task item from the page when button clicked
  delButton.addEventListener("click", function(event){
    item.remove(); 
  })
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
}
