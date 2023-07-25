const mongoose = require('mongoose')
const UserModel = require('./UserModel')

const Schema = mongoose.Schema

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },

        body: {
            type: String,
            required: true
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: 'UserModel',
            required: true
        }

    }, {timestamps: true}
);

const PostModel = mongoose.model("Posts", PostSchema)

module.exports = {PostModel}