'use strict'

const express = require('express');
const controller = require("../controllers/sailorController");
const middleware = require('../controllers/utils');

const router = express.Router();

const { get, getById, add, edit, remove } = controller;

const pathurllist = '/sailors';
const pathurl = '/sailor';

router.get(pathurllist, get);
router.get(pathurl + '/:id', getById);
router.post(pathurl, add);
router.put(pathurl + '/:id', edit);
router.delete(pathurl + '/:id', remove)

module.exports = {
    routes: router
}

