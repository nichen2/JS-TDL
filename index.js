const form = document.querySelector('form');
const todoInput = document.querySelector('input[name="todo-input"]');
const list = document.querySelector('ul')
getLocal();

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
    setLocal();
});

list.addEventListener('click',function(e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        setLocal();
    }
    if (e.target.tagName === 'LI') {
        e.target.parentElement.classList.toggle("line-through")
    }
});

function setLocal() {
    localStorage.setItem("todolist",JSON.stringify(list.innerHTML));
}

function getLocal() {
    list.innerHTML = JSON.parse(localStorage.getItem("todolist"));
}
