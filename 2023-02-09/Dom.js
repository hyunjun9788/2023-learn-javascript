const todoinput= document.querySelector('#todo-input')
const keyCodecheck = function(){

    if(window.event.keyCode === 13 && todoInput.value !=='' ){

        const todoList=document.querySelector('#todo-list')
        const newLi = document.createElement('li')
        const newSpan = document.createElement('span');

        newSpan.textContent = todoinput.value;
        newLi.appendChild(newSpan)
        todoList.appendChild(newLi);
        todoinput.value =''
    }

}