import { addTodo, removeTodo, doTodo } from "../consts/todo.const.js"

export function addTodoAction (title) {
    return {
        title,
        type: addTodo
    }
}

export function removeTodoAction (id) {
    return {
        id,
        type: removeTodo
    }
}

export function doTodoAction (id) {
    return {
        id,
        type: doTodo
    }
}