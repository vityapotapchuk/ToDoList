//Обьявляем переменные

const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
const todoList = document.querySelector('.todoList');

//События

btnNode.addEventListener('click', addToDo);

//Добавим новый item в список 

function addToDo (event) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newItem = document.createElement('li');

    if (inputNode.value === '') {
        alert("Write some text!")
    } else {
        newItem.classList.add('item');
        todoDiv.appendChild(newItem);
        newItem.innerText = inputNode.value;
        todoDiv.addEventListener('click', () => {
            newItem.style.textDecoration = 'line-through';
        })
        todoDiv.addEventListener('dblclick', () => {
            todoList.removeChild(todoDiv);
        })

       
        inputNode.value = '';
        todoList.appendChild(todoDiv);
    }

}
    


    