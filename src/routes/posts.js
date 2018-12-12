const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/posts', (req, res) => {
    Post.find({}, 'title content', (err, posts) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send({ posts: posts })
        }
    }).sort({ _id: 1})
})

router.post('/posts', (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    post.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            Post.find({}, 'title content', (err, posts) => {
                if (err) {
                    res.sendStatus(500)
                } else {
                    res.send({
                        success: true,
                        message: `Post with ID_${data._id} saved successfully!`,
                        posts: posts
                    })
                }
            }).sort({ _id: 1})
        }
    })
})

router.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id, 'title content', (err, post) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(post)
        }
    })
})

router.put('/posts/:id', (req, res) => {
    Post.findById(req.params.id, 'title content', (err, post) => {
        if (err) {
            res.sendStatus(404)
        } else {
            if (req.body.title) {
                post.title = req.body.title
            }
            if (req.body.content) {
                post.content = req.body.content
            }
            post.save(err => {
                if (err) {
                    res.sendStatus(500)
                } else {
                    Post.find({}, 'title content', (err, posts) => {
                        if (err) {
                            res.sendStatus(500)
                        } else {
                            res.send({
                                success: true,
                                message: `Post with ID_${post._id} saved successfully!`,
                                posts: posts
                            })
                        }
                    }).sort({ _id: 1})
                }
            })
        }
    })
})

router.delete('/posts/:id', (req, res) => {
    Post.remove({ _id: req.params.id }, err => {
        if (err) {
            res.sendStatus(500)
        } else {
            Post.find({}, 'title content', (err, posts) => {
                if (err) {
                    res.sendStatus(500)
                } else {
                    res.send({
                        success: true,
                        message: `Post with ID_${req.params.id} deleted successfully!`,
                        posts: posts
                    })
                }
            }).sort({ _id: 1})
        }
    })
})

module.exports = router