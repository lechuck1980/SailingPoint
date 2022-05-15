'use strict'

const data = require("../data/users");
const config = require('../config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async(req, res, next) => {
    try{
        
        const { email, password, sailorId, clubId } = req.body;

        if (!(email && password && (sailorId || clubId))) {
        res.status(400).send("All input is required");
        }

        const oldUser = await data.getById(email);

        if (oldUser.length > 0) {
        return res.status(409).send("User Already Exist. Please Login");
        }

        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await data.create(req.body);
        
        const token = jwt.sign(
        { user_id: password, email },
        config.jwt.key,
        {
            expiresIn: config.jwt.expire,
        }
        );
        user[0].token = token;

        res.status(201).json(user);
  
    }catch(error){
        res.status(400).send(error.message);
    }
}

const login = async(req, res, next) => {
    try{

        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        const user = await data.getById(email);
        if (user.length > 0 && (await bcrypt.compare(password, user[0].password))) {
            const token = jwt.sign(
              { user_id: user[0].password, email },
              config.jwt.key,
              {
                expiresIn: config.jwt.expire,
              }
            );
            

            // user
            res.status(200).json({email, token});
          }
          else
          {
            res.status(400).send("Invalid Credentials");
          }
    }catch(error){
        res.status(400).send(error.message);
    }
}

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
    remove,
    register,
    login
}