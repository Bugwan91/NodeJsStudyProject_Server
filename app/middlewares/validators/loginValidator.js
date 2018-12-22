const { check } = require('express-validator/check')
const UsersRepository = require('app/repositories/UsersRepository')

const emailValidator = check('email').isEmail().custom(async (email) => {
    const users = await UsersRepository.findByEmail(email)
    return users.length !== 0
}).withMessage('No user with that E-mail')

const passwordValidator = check('password').isLength({ min: 6 })

module.exports = [
    emailValidator,
    passwordValidator
]