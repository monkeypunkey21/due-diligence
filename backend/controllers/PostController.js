const express = require('express')

const mongoose = require('mongoose')
const {PostModel} = require('../models/PostModel')

const getPosts = async (req, res) =>
{
    
    try{
        const posts = await PostModel.find({})

        res.status(200).json(posts)
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }
}

const createPost = async (req, res) =>
{

    const userID = req.user._id;

    try{
        const post = await PostModel.create({...req.body, user: userID})
        res.status(200).json(post)
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }
}

const getPost = async (req, res) =>
{
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No Such Post"})
    }

    try{
        const post = await PostModel.find({_id: id})
        res.status(200).json(post)
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getPost, getPosts, createPost}