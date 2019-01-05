// Define the UI Vars 
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners 
loadEventListeners();

// Load all event listeners 
function loadEventListeners() {
    form.addEventListener('submit', addTask);
    // remove task event 
    tasklist.addEventListener('click', removeTask);

    // Clear task event //
    
}

// Add Task 
function addTask(e) {
if(taskInput.value === '') {
    alert('Add a task')
}

// Create li elements 
const li = document.createElement("li");
// Add class 
li.className = 'collection-item';
// Create text node and append to the li
li.appendChild(document.createTextNode(taskInput.value));
// Create new link element 
const link = document.createElement('a');
// Add class 
link.className = "delete-item secondary-content"
// Add icom html
link.innerHTML = `<i class="fa fa-remove"></i>`
// Append the link to the li 
li.appendChild(link);
// Append li to ul
tasklist.appendChild(li);

// clear input 
taskInput.value = "";


    e.preventDefault();
}

// Remove the Task //

function removeTask(e) {
console.log(e.target)
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("DO you want to delete?")) {
       e.target.parentElement.parentElement.remove();
        }
    } 
}