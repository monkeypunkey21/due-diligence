const express = require('express');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) =>
{
    const token = req.cookies.token;

    if (token == null)
        return res.status(401).json({error: "Token not found"});

    try {
        const user = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = user;
        next();
    } catch (error)
    {
        res.status(403).json({error: "token not verified"});
    }

    
}

module.exports = {authenticateToken}