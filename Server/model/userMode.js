const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    profileImg: {
        type: String,
        default: ''
    },
    phone: { type: String, default: '' },
    country: { type: String, default: '' },
    State: { type: String, default: '' },
    city: { type: String, default: '' },
    pinCode: { type: String, default: '' },
}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema)