const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config')
mongoose.Promise = global.Promise

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(require('./routes/posts'))

mongoose.connect(config.dbURL)

mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
        app.listen(config.port, () => {
            console.log(`Server start at port ${config.port}`)
        });
    })
    .on('error', error => console.warn(error))


