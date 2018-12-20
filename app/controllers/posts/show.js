const PostsRepository = require('app/repositories/Postsrepository')

function action(req, res) {
    try {
        res.send(PostsRepository.show(req.params.id))
    } catch (err) {
        res.sendStatus(500)
    }
}

module.exports = action