const express = require('express')
const passport = require('passport')
const User = require('app/repositories/models/User')

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

function logout (req, res) {
}

module.exports = {
    login,
    register,
    logout
}