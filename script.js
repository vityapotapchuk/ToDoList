//Обьявляем переменные

const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
const toDoList = document.querySelector('.todoList');

//События

btnNode.addEventListener('click', addToDo);

//Добавим новый item в список 

function addToDo(event) {

    //Prevents form from relaoding;
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // console.log(todoDiv);
    
    const newItem = document.createElement('li');
    

    if (inputNode.value === '') {
        alert('You need write something!')
    } else {
        newItem.innerText = inputNode.value;
        newItem.classList.add('todo-item');
        todoDiv.appendChild(newItem);
        toDoList.appendChild(todoDiv);
        inputNode.value = '';

        //Add checked button
        const checked = document.createElement('button');
        checked.innerHTML = '<i class="check"></i>';
        checked.classList.add('checked-btn');
        todoDiv.appendChild(checked);

        //Add delete button
        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="trash"></i>';
        deleted.classList.add('checked-btn');
        todoDiv.appendChild(deleted);

    }
   

    

    

}
    