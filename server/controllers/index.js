const express = require('express')


const app = express.Router()
const evm = require('../model/index')



app.post('/register', (req, res) => {
    const { name, email, id, phone } = req.body
    console.log(phone.length)
    if(phone.length <= 10 || phone.length >= 11){
        return res.json({'msg':'ok'})
    }
    return res.json({'msg':'error'})
})


module.exports = app