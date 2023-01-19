const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RoleSchema = new Schema({
    no: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }});

module.exports = Role = mongoose.model('role', RoleSchema)