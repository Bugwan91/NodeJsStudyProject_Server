const passport = require('passport')

function login (req, res, next) {
    return passport.authenticate(
        'local',
        { session: false },
        (err, user, info) => {
            if(err) {
                return next(err);
            }
            if(user) {
                return res.json({ user: user.toAuthJSON() });
            }
            return status(400).info;
        })(req, res, next);
}

module.exports = login