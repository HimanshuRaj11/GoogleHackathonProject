const mongoose = require("mongoose")

const PropertySchema = new mongoose.Schema({
    currentOwner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 6,
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true,
    },
    areaUnit: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    location: {
        type: String,
        required: true
    },
    forSell: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Property", PropertySchema)