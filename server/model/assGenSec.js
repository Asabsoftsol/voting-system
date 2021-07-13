const { Schema, model } = require('mongoose')


const pri = new Schema({
    vote: {
        type: "String",
    }
})

module.exports = model('assGenSec', pri)

