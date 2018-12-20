const PostsRepository = require('app/repositories/PostsRepository')

async function action(req, res) {
    try {
        const posts = await PostsRepository.getAll()
        res.send({posts})
    } catch (err) {
        res.sendStatus(500)
    }
}

module.exports = action