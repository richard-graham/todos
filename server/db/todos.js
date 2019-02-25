const connection = require('./connection')

function getTodos(testDb) {
    const db = testDb || connection 

    return db('todos')
}

function getTodosByPriority(priority, testDb) {
    const db = testDb || connection 

    return db('todos').where('priority', priority)
}

function getTodosByCategory(category, testDb) {
    const db = testDb || connection 

    return db('todos').where('category', category)
}

function getTodosByCompleted(is_complete, testDb) {
    const db = testDb || connection 

    return db('todos').where('is_complete', is_complete)
}

function createTodo(todo, testDb) {
    const db = testDb || connection 

    return db('todo').insert(todo)  
}

module.exports = {
    getTodos,
    getTodosByPriority,
    getTodosByCategory,
    getTodosByCompleted,
    createTodo
}