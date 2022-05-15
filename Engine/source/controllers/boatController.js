'use strict'

const data = require("../data/boats");

const get = async(req, res, next) => {
    try{
        const items = await data.get();
        res.send(items);

    }catch(error){
        res.status(400).send(error.message);
    }
}

const getById = async(req, res, next) => {
    try{
        const id = req.params.id;
        const item = await data.getById(id);
        res.send(item);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const add =  async(req, res, next) => {
    try{
        const data = req.body;
        const item = await data.create(data);
        res.send(item);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const edit = async(req, res, next) => {
    try{
        const data = req.body;
        const id = req.params.id;
        const item = await data.update(id, data);
        res.send(item);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const remove = async(req, res, next) => {
    try{
        const id = req.params.id;
        const item = await data.remove(id);
        res.send(item);
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    get,
    getById,
    add,
    edit,
    remove
}