const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlenght: 20,
    },
    passwordHash: {
    type: String,
    required: true,

    },
    blogs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
    },
});

module.exports = mongoose.model('User', UserSchema);
