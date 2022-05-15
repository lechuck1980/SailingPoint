'use strict'

const data = require("../data/regattas");

const get = async(req, res, next) => {
    try{
        const regattas = await data.get();
        res.send(regattas);

    }catch(error){
        res.status(400).send(error.message);
    }
}

const getById = async(req, res, next) => {
    try{
        const id = req.params.id;
        const regatta = await data.getById(id);
        res.send(regatta);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const add =  async(req, res, next) => {
    try{
        const data = req.body;
        const regatta = await data.create(data);
        res.send(regatta);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const edit = async(req, res, next) => {
    try{
        const data = req.body;
        const id = req.params.id;
        const regatta = await data.update(id, data);
        res.send(regatta);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const remove = async(req, res, next) => {
    try{
        const id = req.params.id;
        const regatta = await data.remove(id);
        res.send(regatta);
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