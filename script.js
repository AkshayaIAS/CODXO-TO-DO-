

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(todoText) {
    const li = document.createElement('li');
    li.classList.add('fadeIn'); 
    li.innerHTML = `
        <img src="to.png" class="todo-icon">
        <span>${todoText}</span>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);

    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
}
