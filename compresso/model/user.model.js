const mongoose = require('mongoose');

const emailValidator = [
    (val) => {
        return (/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(val))
    },
    'Please provide a valid email id'
];

const nameValidator = [
    (val) => {
        return (/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(val))
    },
    'Please provide a valid name'
]

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: nameValidator
    },
    email: {
        type: String,
        required: true,
        validate: emailValidator
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);