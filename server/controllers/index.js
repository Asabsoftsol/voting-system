const express = require('express')


const app = express.Router()
const _evm = require('../model/index')



app.post('/register', async (req, res) => {
    const { name, email, id, phone } = req.body
    if (phone.length >= 10 && phone.length < 11) {
        return res.json({ status: 'error', msg: 'Please enter valid phone number' })
    }
    const voter = new _evm({ name, id, email, phone })
    const user = await _evm.find({ id })


    if (user.length === 0) {
        await voter.save().then(() => {
            return res.json({ status: 'ok' })
        }).catch(err => console.log(err))
    } else {
        // if user already in database
        return res.json({ status: 'error', msg: 'You already voted' })
    }
})


module.exports = app