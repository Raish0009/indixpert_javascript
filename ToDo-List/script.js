// Get all main elements
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let clearBtn = document.getElementById("clearBtn");

// Load saved tasks when the page opens
window.onload = function() {
  let saved = localStorage.getItem("tasks");
  if (saved) {
    taskList.innerHTML = saved;
  }
};

// Add a new task
addBtn.addEventListener("click", addTask);

// Also add when pressing Enter
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let text = taskInput.value.trim();

  if (text === "") {
    alert("Please write a task!");
    return;
  }

  // Create list item
  let li = document.createElement("li");

  // Task text
  let span = document.createElement("span");
  span.textContent = text;

  // When we click the text, mark as done
  span.addEventListener("click", function() {
    li.classList.toggle("done");
    saveData();
  });

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "del-btn";

  delBtn.addEventListener("click", function() {
    li.remove();
    saveData();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  // Clear input box
  taskInput.value = "";

  saveData();
}

// Save current list to browser storage
function saveData() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

// Clear all tasks
clearBtn.addEventListener("click", function() {
  if (confirm("Do you want to remove all tasks?")) {
    taskList.innerHTML = "";
    saveData();
  }
});
