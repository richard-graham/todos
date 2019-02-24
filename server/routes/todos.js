const express = require('express')
const router = express.Router()
const {getTodos, getTodosByPriority, getTodosByCategory, getTodosByCompleted} = require('../db/todos')

// GET api/v1/tweets
router.get('/', (req, res) => {
   getTodos()
   .then(todos => {
       res.json(todos)
   })
   .catch(err => {
       console.log(err)
       res.status(500).json({error: 'Something went wrong'})
   })
})

router.get('/priority/:priority', (req, res) => {
    getTodosByPriority(req.params.priority)
    .then(todos => {
        res.json(todos)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

router.get('/category/:category', (req, res) => {
    getTodosByCategory(req.params.category)
    .then(todos => {
        res.json(todos)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

router.get('/complete/:is_complete', (req, res) => {
    req.params.is_complete == 'true' ? req.params.is_complete = 1 : ''
    req.params.is_complete == 'false' ? req.params.is_complete = 0 : ''
    getTodosByCompleted(req.params.is_complete)
    .then(todos => {
        res.json(todos)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})



module.exports = router