const express = require('express')
const app = express.Router()

const pre = require('../model/vote')
const vicePre = require('../model/vicepresident')
const gm = require('../model/genralSect')
const asst = require('../model/assGenSec')
const voter = require('../model/index')

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



app.get('/vice-president/1', async (req, res) => {
    const totalvote = await vicePre.countDocuments({ vote: '1' })
    return res.json({ data: totalvote })
})
app.get('/vice-president/2', async (req, res) => {
    const totalvote = await vicePre.countDocuments({ vote: '2' })
    return res.json({ data: totalvote })
})
app.get('/vice-president/nota', async (req, res) => {
    const totalvote = await vicePre.countDocuments({ vote: '0' })
    return res.json({ data: totalvote })
})



app.get('/gm/1', async (req, res) => {
    const totalvote = await gm.countDocuments({ vote: '1' })
    return res.json({ data: totalvote })
})
app.get('/gm/2', async (req, res) => {
    const totalvote = await gm.countDocuments({ vote: '2' })
    return res.json({ data: totalvote })
})
app.get('/gm/nota', async (req, res) => {
    const totalvote = await gm.countDocuments({ vote: '0' })
    return res.json({ data: totalvote })
})



app.get('/a-gm/1', async (req, res) => {
    const totalvote = await asst.countDocuments({ vote: '1' })
    return res.json({ data: totalvote })
})
app.get('/a-gm/2', async (req, res) => {
    const totalvote = await asst.countDocuments({ vote: '2' })
    return res.json({ data: totalvote })
})
app.get('/a-gm/nota', async (req, res) => {
    const totalvote = await asst.countDocuments({ vote: '0' })
    return res.json({ data: totalvote })
})




// reset all data
app.get('/reset',async(req,res)=>{
    await pre.remove()
    await vicePre.remove()
    await gm.remove()
    await asst.remove()
    await voter.remove()
    return res.json({status:'ok',msg:'All votes are reset'})
})

module.exports = app