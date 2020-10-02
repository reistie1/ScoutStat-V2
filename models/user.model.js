const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 5
    },
    displayName:{
        type: String,
        required: false
    }
}, {timestamps: true})


const User = mongoose.model('User', userSchema)

module.exports = User