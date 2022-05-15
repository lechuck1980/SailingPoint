'use strict'

const express = require('express');
//const middleware = require('../controllers/utils');
const controller = require("../controllers/userController");

const router = express.Router();

const { get, getById, add, edit, remove } = controller;

router.get('/users', get);
router.get('/user/:id', getById);
router.post('/user', add);
router.put('/user/:id', edit);
router.delete('/user/:id', remove)

module.exports = {
    routes: router
}

