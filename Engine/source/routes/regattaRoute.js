'use strict'

const express = require('express');
const controller = require("../controllers/regattaController");
const middleware = require('../controllers/utils');

const router = express.Router();

const { get, getById, add, edit, remove } = controller;

router.get('/regattas', get);
router.get('/regatta/:id', getById);
router.post('/regatta', add);
router.put('/regatta/:id', edit);
router.delete('/regatta/:id', remove)

module.exports = {
    routes: router
}

