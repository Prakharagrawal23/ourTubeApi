const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const userRoute = require('./routes/user')
const videoRoute = require('./routes/video')
const commentRoute = require('./routes/comment')

// const userRoute = require('../api/routes/user')
// const videoRoute = require('../api/routes/video')
// const commentRoute = require('../api/routes/comment')


const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

// app.get('/test',(req,res)=>{
//     res.status(200).json({
//         msg : 'test api'
//     })
// })

const connectWithDatabase = async()=>{
    try {
        const res = await mongoose.connect(process.env.mongo_uri)
        console.log('connected with database....')
    } catch (err) {
        console.log(err)
    }
}
connectWithDatabase()

app.use(bodyParser.json())

app.use(fileUpload({
    useTempFiles : true,
    // tempFileDir : '/tmp/'
}));

app.use('/user',userRoute)
app.use('/video',videoRoute)
app.use('/comment',commentRoute)


module.exports = app;