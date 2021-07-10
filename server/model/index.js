const { Schema, model } = require('mongoose')


const voter = new Schema({
    name: {
        type: "String",
    },
    id: {
        type: "String",
        unique: true
    },
    email: {
        type: "String",
        unique: true
    },
    phone: {
        type: "String"
    }
})

module.exports = model('voter', voter)