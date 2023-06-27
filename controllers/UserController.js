const mongoose = require('mongoose')
const express = require('express')
const {UserModel} = require('../models/UserModel')

const createUser = async (req, res) =>
{
    try{
        const user = await UserModel.create({...req.body})
        res.status(200).json(user)
    } catch(error)
    {
        res.status(400).json({error: error.message})
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

module.exports = {createUser, getUser, updateUser, deleteUser}