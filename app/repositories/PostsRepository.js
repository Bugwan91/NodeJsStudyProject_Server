const Post = require('./models/Post')

function getAll() {
    return Post.find({}, 'title content').exec()
}

async function findById(postId) {
    return await Post.findById(postId, 'title content').exec()
}

async function store(postData) {
    const post = new Post({
        title: postData.title,
        content: postData.content,
        author: postData.author
    })
    return await post.save()
}

async function update(postId, postData) {
    const post = await Post.findById(postId, 'title content')
    post.title = postData.title
    post.content = postData.content
    return await post.save()
}

async function remove(postId) {
    return await Post.remove({ _id: postId })
}

module.exports = {
    getAll,
    findById,
    update,
    store,
    remove
}