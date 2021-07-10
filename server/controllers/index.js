const express = require('express')


const app = express.Router()

app.post('/register',(req,res)=>{
    console.log(req.body)
})


module.exports = app