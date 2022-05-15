'use strict'

const express = require('express');
const controller = require("../controllers/userController");

const router = express.Router();

const { login, register } = controller;

router.post('/register', register)
router.post('/login', login);

module.exports = {
    routes: router
}

