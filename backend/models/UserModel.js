const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },

        username: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        }
    }, {timestamps: true}
)

const UserModel = mongoose.model("Users", UserSchema)

module.exports = {UserModel}