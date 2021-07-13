const express = require('express')


const app = express.Router()
const _voter = require('../model/index')
const _president = require('../model/vote')
const _vPresident = require('../model/vicepresident')
const _genralSec = require('../model/genralSect')
const _asstgenral = require('../model/assGenSec')


app.post('/register', async (req, res) => {
    const { name, email, id, phone } = req.body
    if (phone.length >= 10 && phone.length < 11) {
        return res.json({ status: 'error', msg: 'Please enter valid phone number' })
    }
    const voter = new _voter({ name, id, email, phone })
    const user = await _voter.find({ id })

    if (user.length === 0) {
        await voter.save().then(() => {
            return res.json({ status: 'ok' })
        }).catch(err => console.log(err))
    } else {
        // if user already in database
        return res.json({ status: 'error', msg: 'You already voted' })
    }
})

app.post('/president/1', async (req, res) => {
    const { vote } = req.body
    const President = new _president({ vote })
    console.log(President)
    await President.save()
        .then(() => {
            return res.json({ status: 'ok' })
        })
        .catch(err => console.log(err))
})

app.post('/v-president/1', async (req, res) => {
    const { vote } = req.body
    const President = new _vPresident({ vote })
    console.log(President)
    await President.save()
        .then(() => {
            return res.json({ status: 'ok' })
        })
        .catch(err => console.log(err))
})

app.post('/genralSecretary/1', async (req, res) => {
    const { vote } = req.body
    const President = new _genralSec({ vote })
    console.log(President)
    await President.save()
        .then(() => {
            return res.json({ status: 'ok' })
        })
        .catch(err => console.log(err))
})

app.post('/asst-genralSecretary/1', async (req, res) => {
    const { vote } = req.body
    const President = new _asstgenral({ vote })
    console.log(President)
    await President.save()
        .then(() => {
            return res.json({ status: 'ok' })
        })
        .catch(err => console.log(err))
})

module.exports = app