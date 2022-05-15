'use strict'

const express = require('express');
const controller = require("../controllers/boatController");
const middleware = require('../controllers/utils');

const router = express.Router();

const { get, getById, add, edit, remove } = controller;

router.get('/boats', get);
router.get('/boat/:id', getById);
router.post('/boat', add);
router.put('/boat/:id', edit);
router.delete('/boat/:id', remove)

module.exports = {
    routes: router
}

