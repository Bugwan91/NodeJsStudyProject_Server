const jwt = require('express-jwt')
const secret = require('config').secret

const getTokenFromHeaders = (req) => {
    const {headers: { authorization } } = req
    if (authorization && authorization.split(' ')[0] === 'Token') {
        return authorization.split(' ')[1]
    }
    return null
}

const auth = {
    required: jwt({
        secret,
        getToken: getTokenFromHeaders
    }),
    optional: jwt({
        secret,
        getToken: getTokenFromHeaders,
        credentialsRequired: false
    })
}

module.exports = auth

/*
Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF3ZXJ0eUBtYWlsLmxvYyIsImlkIjoiNWMxYjg4ZDYxYjk1N2Q2MWQ0ZGVkZmY2IiwiZXhwIjoxNTUwNDk2MTUxLCJpYXQiOjE1NDUzMTIxNTF9.q3mAKdCY9a0AKP4rdoqxKRm8xf_8KNBABY9bzB5kIxQ
 */