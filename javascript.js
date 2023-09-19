
var input = document.getElementById("text");
var button = document.getElementById("createthetask");
var incomtask = document.getElementById("incomplete");
var completedTaskHolder = document.getElementById("completedtask");

var createNewTaskItem = function(taskString) {
  var listinput = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editbutton = document.createElement("button");
  var Delete = document.createElement("button");
  
   //Each element needs modifying
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editbutton.innerText = "Edit";
  editbutton.className = "edit";
  Delete.innerText = "Delete";
  Delete.className = "delete";
  
  label.innerText = taskString;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editbutton);
  listItem.appendChild(Delete);
  
  return listItem;
}

var addTask = function() {
  console.log("Add your task");
  var listItem = createNewTaskElement(taskInput.value);
  incompletedTaskHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);
}

var editTask = function() {
  console.log("Edit here");
}

var deleteTask = function() {
  console.log("Delete the Task");
}

var taskCompleted = function() {
  console.log("Completed Task");
  var listItem = this.parentNode;
  completedTaskHolder.appendChild(listItem);
  bindTasksEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
  console.log("Your task is incomplete");
  var listItem = this.parentNode;
  incompletedTaskHolder.appendChild(listItem);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
  
	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkbox.onchange = checkBoxEventHandler;
	
}

var req = function() {
  console.log("Request");
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", req);


for (var i = 0; i < incompletedTaskHolder.length; i++) {  bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}

for (var i = 0; i < completedTaskHolder.length; i++) {
 bindTaskEvents(incompletedTaskHolder.children[i], taskIncompleted);
}

addButton.onclick = addTask;