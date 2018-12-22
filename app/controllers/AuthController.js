const Controller = require('./Controller')

const actions = {
    loginAction: require('./auth/login'),
    logoutAction: require('./auth/logout'),
    registerAction: require('./auth/register')
}

module.exports = Controller(actions)