const form = document.querySelector('form');
const todoInput = document.querySelector('input[name="todo-input"]');
const list = document.querySelector('ul')

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const todo = document.createElement('li');
    const remove = document.createElement('button');
    remove.id = 'done'
    remove.innerText = 'Done';
    todo.innerText = todoInput.value;
    todo.appendChild(remove);
    list.appendChild(todo);
    todoInput.value = '';
});

list.addEventListener('click',function(e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    if (e.target.tagName === 'LI') {
        e.target.parentElement.classList.toggle("line-through")
    }
});
