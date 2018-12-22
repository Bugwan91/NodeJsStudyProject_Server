const express = require('express')
const router = express.Router()
const PostsController = require('app/controllers/PostsController')
const AuthMiddleware = require('app/middlewares/AuthMiddleware')

router.get('/', PostsController.indexAction)
router.post('/', AuthMiddleware.required, PostsController.storeAction)
router.get('/:id', PostsController.showAction)
router.put('/:id', AuthMiddleware.required, PostsController.updateAction)
router.delete('/:id', AuthMiddleware.required, PostsController.deleteAction)

module.exports = router