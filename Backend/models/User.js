const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true //" Om Kadu " => "Om Kadu"
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'end_user', 'employee'], // restricts allowed roles
        default: 'end_user'
    },
    organization: {
        type: String,
        enum: ['school', 'hospital', 'other'], // only for employees
        required: function () {
            return this.role === 'employee';
        }
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
