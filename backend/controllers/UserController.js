const mongoose = require('mongoose')
const express = require('express')
const {UserModel} = require('../models/UserModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createUser = async (req, res) =>
{

    const find = await UserModel.findOne({username: req.body.username})
    
    if (find != null)
        return res.status(400).json({error: "Another user with that username already exists"});

    try{
        const hashpass = await bcrypt.hash(req.body.password, 10);
        const user = await UserModel.create({email: req.body.email, username: req.body.username, password: hashpass})
        res.status(200).json(user)
    } catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

const loginUser = async (req, res) =>
{

    try {
        const user = await UserModel.findOne({username: req.body.username});

        if (user == null)
            return res.status(400).json({error: "Username not found"});


        if (await bcrypt.compare(req.body.password, user.password))
        {
            const token = jwt.sign({_id: user._id}, process.env.TOKEN_KEY);
            //res.status(200).json({accessToken: token});
            res.cookie('token', token, {httpOnly: true, sameSite: 'Lax', secure: false });
            res.status(200).json({token: token, username: user.username});
        }
        else
        {
            res.status(400).json({error: "Incorrect password"});
        }
    }
    catch (error)
    {
        res.status(500).json({error: "Internal Server Error"});
    }
}

const getUser = async (req, res) =>
{
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No Such User"})
    }

    try{
        const user = await UserModel.find({_id: id})
        res.status(200).json(user)
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }
}

const updateUser = async (req, res) =>
{
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No Such User"})
    }

    try{
        const user = await UserModel.findByIdAndUpdate({_id: id}, {...req.body})
        res.status(200).json(user)
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }
}

const deleteUser = async (req, res) =>
{
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No Such User"})
    }

    try{
        const user = await UserModel.findByIdAndDelete({_id: id})
        res.status(200).json(user)
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createUser, getUser, updateUser, deleteUser, loginUser}