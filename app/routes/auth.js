const express = require('express')
const router = express.Router()
const AuthController = require('app/controllers/AuthController')
const AuthMiddleware = require('app/middlewares/AuthMiddleware')

const LoginValidator = require('app/middlewares/validators/LoginValidator')
const RegisterValidator = require('app/middlewares/validators/RegisterValidator')

router.post('/login', LoginValidator, AuthController.loginAction)
router.post('/register', RegisterValidator, AuthController.registerAction)
router.get('/logout', AuthMiddleware.required, AuthController.logoutAction)

module.exports = router