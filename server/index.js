const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()


// middleware 
app.use(cors())


app.use(express.urlencoded({extended:true}))
app.use(express.json())


mongoose.connect(process.env.URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log('database connected'))
.catch(err => console.log(err))


app.use('/api',require('./controllers/index'))



const port = process.env.PORT || 3001
app.listen(port, console.log(`server runing on port:${port}`))