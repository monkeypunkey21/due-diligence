const express = require('express')

const mongoose = require('mongoose')
const {PostModel} = require('../models/PostModel')

const getPosts = async (req, res) =>
{
    
    /*distance = req.body.distance*/

    const euclid_dist = (x1,y1,z1, x2, y2, z2) =>
    {
        return Math.sqrt((x1 * x1 - x2 * x2 + y1 * y1 - y2 * y2 + z1 * z1 - z2 * z2))
    }

    try{
        const posts = await PostModel.find({})
        /*posts.filter(
            (post) =>
            {
                return euclid_dist(post.location) <= distance
            } 
        ) */
        res.status(200).json(posts)
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }
}

const createPost = async (req, res) =>
{
    try{
        const post = await PostModel.create({...req.body})
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