const express = require('express')
const router = express.Router()
const AuthController = require('app/controllers/AuthController')
const AuthMiddleware = require('app/middlewares/AuthMiddleware')

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.get('/logout', AuthMiddleware.required, AuthController.logout)

module.exports = router
/*
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5sb2MiLCJpZCI6IjVjMWE2ODJhMzE2YmY2OWI5NDk3NGJlZCIsImV4cCI6MTU1MDQxODcwMSwiaWF0IjoxNTQ1MjM0NzAxfQ.V5RvPopzuAObZeLgi5UV9s_XXaUN7Nk3p8BplfUFjBI
 */