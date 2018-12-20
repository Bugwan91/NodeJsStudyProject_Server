module.exports = {
    server: {
        host: '127.0.0.1',
        port: 3007
    },

    baseUrl: 'http://localhost:3007',

    db: {
        mongo: {
            url: 'mongodb://localhost:27019/test_db'
        },
    },

    auth: {
        // 180 days in ms
        tokenLifetime: 365 * 24 * 3600 * 1000
    },

    headers: {
        authToken: 'auth-token'
    },

    secret: 'supersecret:)'
};