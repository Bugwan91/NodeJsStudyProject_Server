const User = require('app/repositories/models/User')

function register (req, res) {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    })
    user.setPassword(req.body.password)
    user.save()
        .then(() => {
            return res.json({ user: user.toAuthJSON() })
        })
        .catch(err => {
            res.sendStatus(500)
        })
}

module.exports = register