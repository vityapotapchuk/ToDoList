//Обьявляем переменные

const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
const toDoList = document.querySelector('.todoList');

//События

btnNode.addEventListener('click', addToDo);

//Добавим новый item в список 

function addToDo(event) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // console.log(todoDiv);
    
    const newItem = document.createElement('li');

    if (inputNode.value === '') {
        alert('You need write something!')
    } else {
        alert('Good')
    }
   

    

    

}
    