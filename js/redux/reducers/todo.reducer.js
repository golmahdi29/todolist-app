import { addTodo, removeTodo, doTodo } from "../consts/todo.const.js";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case addTodo:
            if (!action.title) {
                alert('Please enter correct title !!')
                return
            }
            const newTodo = {
                id: Math.floor(Math.random() * 100000),
                title: action.title,
                isCompleted: false,
            }

            const newArr = [...state, newTodo]
            return newArr
            break;

        case removeTodo:
            if (!action.id) {
                alert('ID is not valid !!')
                return
            }

            const newTodosArr = [...state]

            const newState = newTodosArr.filter(todo => todo.id !== action.id)

            return newState
            break;

        case doTodo:
            if (!action.id) {
                alert('ID is not valid !!')
                return
            }
            const newTodosArr2 = [...state]

            const newTodos = newTodosArr2.map(todo => {
                if (todo.id === action.id) {
                    todo.isCompleted = true
                }
                return todo
            })

            return newTodos
            break;

        default:
            return state
            break;
    }
}

export default todoReducer