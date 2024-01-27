//Find elements 
const form = document.querySelector('#form')
const taskInput = document.querySelector('#taskInput')
const tasksList = document.querySelector('#tasksList')
const emptyList = document.querySelector('#emptyList')

let tasks = [];

if (localStorage.getItem('data')) {
    tasks = JSON.parse(localStorage.getItem('data'))
}

tasks.forEach(function (task) {
    const cssClass = task.done ? 'task-title task-title--done' : 'task-title';
      
       //Add task HTML to task container
    const taskHTML = `
           <li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
               <span class="${cssClass}">${task.name}</span>
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
})

checkEmptyList()
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

       saveToLocalStorage();
       
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

       checkEmptyList()
   
   
    //    if (emptyList.children.length > 1) {
    //        emptyList.classList.add('none')
    //    }
}

function deleteTask(event) {
    if (event.target.dataset.action === 'delete') {
        const parentNode = event.target.closest('.list-group-item')

        //Find index for delete from massive
        const id = Number(parentNode.id);
        const index = tasks.findIndex(function(task) {
            if (task.id === id) {
                return true
            }
        })
        
        //Delete task from massive
        tasks.splice(index, 1)
        saveToLocalStorage()
        parentNode.remove()

        checkEmptyList()
       
    }

    // if (tasksList.children.length === 1) {
    //     emptyList.classList.remove('none')
    // }
}

function doneTask (event) {
    if (event.target.dataset.action === 'done') {
       const parentNode = event.target.closest('.list-group-item')

        //Find task ID
       const id = Number(parentNode.id)

       //Find
       const task = tasks.find(function (task) {
        if (task.id === id) {
            return true
        }
       })

       task.done = !task.done

       saveToLocalStorage();

       const taskTitle = parentNode.querySelector('.task-title')
       taskTitle.classList.toggle('task-title--done')
       

    }
}

function checkEmptyList() {
    if (tasks.length === 0) {
        const emptyListHTML = `
        <li id="emptyList" class="list-group-item empty-list">
			<img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
			<div class="empty-list__title">Task list is empty</div>
		</li>
        ` 
        tasksList.insertAdjacentHTML('afterbegin', emptyListHTML)
    }

    if (tasks.length > 0) {
        const emptyListEl = document.querySelector('#emptyList')
              emptyListEl ? emptyListEl.remove() : null;
    }
}

function saveToLocalStorage() {
    localStorage.setItem('data', JSON.stringify(tasks))
}