const User = require('./models/User')

async function findById(userId) {
    return await User.findById(userId, 'name email').exec()
}

async function findByEmail(email) {
    return await User.find({ email }, 'name email').exec()
}


module.exports = {
    findById,
    findByEmail
}