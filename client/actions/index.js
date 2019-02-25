import {getTodos as apiGetTodos} from '../api/todos'
import {getTodosByCompleted as apiGetTodosByCompleted} from '../api/todos'
import {getTodosByPriority as apiGetTodosByPriority} from '../api/todos'

export function getTodos() {
    return dispatch => {
        return apiGetTodos()
        .then(todos => {
            dispatch(saveTodos(todos))
        })
    }
}

export function getTodosByPriority(priority) {
    return dispatch => {
        return apiGetTodosByPriority(priority)
        .then(todos => {
            dispatch(saveTodos(todos))
        })
    }
}

export function getTodosByCompleted(truth) {
    return dispatch => {
        return apiGetTodosByCompleted(truth)
        .then(todos => {
            dispatch(saveTodos(todos))
        })
    }
}

export function saveTodos(todos) {
    return {
        type: 'SAVE_TODOS',
        todos: todos,
    }
}