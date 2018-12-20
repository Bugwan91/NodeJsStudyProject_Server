const User = require('./models/User')

async function show(userId) {
    return await User.findById(userId, 'name email').exec()
}


module.exports = {
    show
}