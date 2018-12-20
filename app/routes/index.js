const express = require('express')
const router = express.Router()

router.use('/', require('./greetings'))
router.use('/auth', require('./auth'))
router.use('/posts', require('./posts'))

router.all('*', (req, res) => {
    res.status(404).send({msg: 'not found'})
});

router.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({
            message: 'Invalid token'
        })
    }
})

module.exports = router