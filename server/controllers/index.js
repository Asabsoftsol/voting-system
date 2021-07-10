const express = require('express')


const app = express.Router()
const _evm = require('../model/index')



app.post('/register', async (req, res) => {
    const { name, email, id, phone } = req.body
    console.log(phone.length)
    const voter = new _evm({
        name, email, id, phone
    })
    await voter.save()
        .then(() => {
            return res.json({status: 'ok'})
        })
        .catch(err => {
            console.log(err)
            return res.json({status:'error'})
        })
    return res.json({ 'msg': 'error' })
})


module.exports = app