const express = require('express')
const app = express.Router()

const pre = require('../model/vote')
const vicePre = require('../model/vicepresident')
const gm = require('../model/genralSect')
const asst = require('../model/assGenSec')


app.get('/president/1', async (req, res) => {
    const totalvote = await pre.countDocuments({ vote: '1' })
    return res.json({ data: totalvote })
})

app.get('/president/2', async (req, res) => {
    const totalvote = await pre.countDocuments({ vote: '2' })
    return res.json({ data: totalvote })
})

app.get('/president/nota', async (req, res) => {
    const totalvote = await pre.countDocuments({ vote: '0' })
    return res.json({ data: totalvote })
})

module.exports = app