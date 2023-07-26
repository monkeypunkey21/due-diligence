const express = require('express');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) =>
{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null)
        return res.status(401);

    jwt.verify(token, process.env.TOKEN_KEY, (err, user) =>
    {
        if (err)
            return res.status(400);

        req.user = user;

        next();
    });
}

module.exports = {authenticateToken}