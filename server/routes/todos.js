const express = require('express')
const router = express.Router()

// GET api/v1/tweets
router.get('/', (req, res) => {
    res.json([
        {
            task: 'Go shopping',
            priority: 3,
            category: 'Home',
            is_completed: false,
            due_at: 12/10/2019
        }
    ])
})



module.exports = router