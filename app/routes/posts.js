const express = require('express')
const router = express.Router()
const PostsController = require('app/controllers/PostsController')
const AuthMiddleware = require('app/middlewares/AuthMiddleware')

router.use(AuthMiddleware.required)

router.get('/', PostsController.indexAction)
router.post('/', PostsController.storeAction)
router.get('/:id', PostsController.showAction)
router.put('/:id', PostsController.updateAction)
router.delete('/:id', PostsController.deleteAction)

module.exports = router