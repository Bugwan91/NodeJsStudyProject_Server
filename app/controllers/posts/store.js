const PostsRepository = require('app/repositories/PostsRepository')
const indexAction = require('./index')


async function action(req, res) {
    try {
        await PostsRepository.store({
            title: req.body.title,
            content: req.body.content,
            author: req.user.id
        })
        await indexAction(req, res)
    } catch (err) {
        res.sendStatus(500)
    }

}

module.exports = action