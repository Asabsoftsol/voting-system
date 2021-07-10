const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()


// middleware 
app.use(cors())


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/api',require('./controllers/index'))



const port = process.env.PORT || 3001
app.listen(port, console.log(`server runing on port:${port}`))