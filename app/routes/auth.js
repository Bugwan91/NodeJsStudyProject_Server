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

// eyJlbWFpbCI6Inp4Y3p4Y0BtYWlsLmxvYyIsImlkIjoiNWMxZTJmMzI0MDU2M2Y0Y2FjZTk4NmNkIiwiZXhwIjoxNTUxMDIwODIwLCJpYXQiOjE1NDU4MzY4MjB9.LNRhAk7HT7Z2Q-Ah8fphZ5ErDWzjSwXQBTA6MVLir90