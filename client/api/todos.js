import request from 'superagent'

export function getTodos() {
    return request.get('/api/v1/todos')
        .then(res => res.body)
}

export function getTodosByPriority(priority) {
    return request.get(`/api/v1/todos/priority/${priority}`)
        .then(res => res.body)
}

export function getTodosByCompleted(truth) {
    return request.get(`/api/v1/todos/complete/${truth}`)
    .then(res => res.body)
}