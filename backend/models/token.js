const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema({
    id: Number,
    token: { 
        type: String,
        unique: true
    },  
    role: String
})

const Tokens = mongoose.model('Tokens', tokenSchema)

module.exports = Tokens
