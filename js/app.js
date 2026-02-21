import todoStore from './redux/stores/todo.store.js'
import { addTodoAction, removeTodoAction, doTodoAction } from './redux/actionTypes/todo.actionType.js'
import { addTodo, removeTodo, doTodo } from './redux/consts/todo.const.js'

const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const filterTodo = document.querySelector('.filter-todo')

let filterStatus = 'all'


todoButton.addEventListener('click', addTodoHandler)
todoList.addEventListener("click", function (e) {
    if (e.target.closest(".complete-btn")) {
        const btn = e.target.closest(".complete-btn");
        const id = btn.dataset.id;
        btn.classList.add('pressed');
        setTimeout(() => btn.classList.remove('pressed'), 140);
        doTodoHandler(Number(id));
    }

    if (e.target.closest(".trash-btn")) {
        const btn = e.target.closest(".trash-btn");
        const id = btn.dataset.id;
        removeTodoHandler(Number(id), btn);
    }
});

filterTodo.addEventListener('change', filterHandler)

function filterHandler(e) {
    filterStatus = e.target.value;
    reRenderDOM();
}

function addTodoHandler(e) {
    e.preventDefault()

    const todoTitle = todoInput.value.trim()

    todoStore.dispatch(addTodoAction(todoTitle, addTodo))
    todoInput.value = ''
    reRenderDOM();
}

function doTodoHandler(id) {
    todoStore.dispatch(doTodoAction(id, doTodo))

    reRenderDOM();
}

function removeTodoHandler(id, buttonEl) {
    // animate removal, then dispatch
    try {
        const todoEl = buttonEl.closest('.todo');
        if (todoEl) {
            todoEl.classList.add('removing');
            // wait for animation to finish before updating store
            setTimeout(() => {
                todoStore.dispatch(removeTodoAction(id, removeTodo))
                reRenderDOM();
            }, 300);
            return;
        }
    } catch (err) {}

    // fallback
    todoStore.dispatch(removeTodoAction(id, removeTodo))
    reRenderDOM();
}

function reRenderDOM() {
    let todos = todoStore.getState();
    todoList.innerHTML = "";

    if (filterStatus === "completed") {
        todos = todos.filter(todo => todo.isCompleted === true)
    }
    else if (filterStatus === "incomplete") {
        todos = todos.filter(todo => todo.isCompleted === false)
    }
    else {
        todos
    }

    todos.map((todo) => {
        todoList.insertAdjacentHTML('beforeend', `
            <div class="todo">
                <li class="${todo.isCompleted ? 'todo-item completed' : 'todo-item'}">${todo.title}</li>
                <div class="action-group">
                    <button class="complete-btn" data-id="${todo.id}">
                        <i class="fas fa-check-circle"></i>
                    </button>
                    <button class="trash-btn" data-id="${todo.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
             </div>
        `)
    })
}