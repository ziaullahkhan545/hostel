// importing assets
const mongoose = require('mongoose');
const validator = require('validator');

// creating schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: [3, 'minimum length must be 3']
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: [true, 'username already exists']
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email already exist'],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email');
            }
        }
    },
    password: {
        type: String,
        required: true,
    }
})

const User = new mongoose.model('User', userSchema);

module.exports = User;