'use strict'

const express = require('express');
const controller = require("../controller/race.js");
const routename = '/race';
const router = express.Router();

const { create, findAll, findOne, update, remove } = controller;

router.get(routename + 's', findAll);
router.get(routename + '/:id', findOne);
router.post(routename, create);
router.put(routename + '/:id', update);
router.delete(routename + '/:id', remove);

module.exports = {
    routes: router
}
