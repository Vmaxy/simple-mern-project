const express = require('express')
const multer = require('multer')
const upload = require('./service/storage.service')
const postModel = require("./models/post.model")
const  cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json());

const multermiddle = multer({storage : multer.memoryStorage() })

app.post('/create-post',multermiddle.single("image") , async (req,res) => {
    console.log(req.body)
    console.log(req.file)

    const result = await upload(req.file.buffer)
    console.log(result)

    const post = await postModel.create({
        image : result.url,
        caption: req.body.caption

    })
 return res.status(201).json({
    message : "Post created sucess",
    post
 })
})
app.get("/post",async (req,res) => {
   const  post = await postModel.find()
    return res.status(201).json({
    message : "Post fetched  sucess",
    post
 })
    
})

module.exports = app ;