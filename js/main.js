//Find elements 
const form = document.querySelector('#form')
const taskInput = document.querySelector('#taskInput')
const tasksList = document.querySelector('#tasksList')
const emptyList = document.querySelector('#emptyList')

let tasks = [];

//Add task to list
form.addEventListener('submit', addTask) 

//Delete task
tasksList.addEventListener('click', deleteTask)
tasksList.addEventListener('click', doneTask)


//Functions
function addTask (event) {
       //Cencel default refresh page
       event.preventDefault()

       //Find task text from input
       let taskText = taskInput.value;

       //Create task parameters
       const newTask =  {
            id: Date.now(),
            name: taskText,
            done: false, 
       }
       //Add new task to massive fo tasks
       tasks.push(newTask)
       
       const cssClass = newTask.done ? 'task-title task-title--done' : 'task-title';
      

       //Add task HTML to task container
       const taskHTML = `
           <li id="${newTask.id}" class="list-group-item d-flex justify-content-between task-item">
               <span class="${cssClass}">${newTask.name}</span>
               <div class="task-item__buttons">
                   <button type="button" data-action="done" class="btn-action">
                       <img src="./img/tick.svg" alt="Done" width="18" height="18">
                   </button>
                   <button type="button" data-action="delete" class="btn-action">
                       <img src="./img/cross.svg" alt="Done" width="18" height="18">
                   </button>
               </div>
           </li>
       `
       //Add new item for list container
       tasksList.insertAdjacentHTML('beforeend', taskHTML)
   
       //Clear input and focus again
       taskInput.value = ''
       taskInput.focus(); 
   
   
       if (emptyList.children.length > 1) {
           emptyList.classList.add('none')
       }
}

function deleteTask(event) {
    if (event.target.dataset.action === 'delete') {
        const parentNode = event.target.closest('.list-group-item')
        parentNode.remove()
    }

    if (tasksList.children.length === 1) {
        emptyList.classList.remove('none')
    }
}

function doneTask (event) {
    if (event.target.dataset.action === 'done') {
       const parentTask = event.target.closest('.list-group-item')
       const taskTitle = parentTask.querySelector('.task-title')
       taskTitle.classList.toggle('task-title--done')
       

    }
}