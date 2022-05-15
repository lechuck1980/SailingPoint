'use strict'

const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const pathSQL = 'results'

const get = async() => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries(pathSQL);
        const query = await pool.request().query(sqlQueries.list);
        return query.recordset;
    }catch(error){
        return error.message;
    }
}

const getById = async(id) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries(pathSQL);
        const query = await pool.request()
                        .input("id", sql.Int, id)
                        .query(sqlQueries.listById);
        return query.recordset;

    }catch(error){
        return error.message;
    }

}

const create = async(data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries(pathSQL);
        const query = await pool.request()
            .input("name", sql.VarChar(255), data.name)
            .input("regattaId", sql.Int, data.regattaId)
            .input("classId", sql.Int, data.classId)
            .input("fleetId", sql.Int, data.fleetId)
            .query(sqlQueries.create);
        return query.recordset;
    }catch(error){
        return error.message;
    }
}

const update = async(id, data) => {
    try{
        
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries(pathSQL);
        
        const query = await pool.request()
            .input("id", sql.Int, id)    
            .input("name", sql.VarChar(255), data.name)
            .input("regattaId", sql.Int, data.regattaId)
            .input("classId", sql.Int, data.classId)
            .input("fleetId", sql.Int, data.fleetId)
            .query(sqlQueries.update);
        
        return query.recordset;

    }catch(error){
        return error.message;
    }
}

const remove = async(id) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries(pathSQL);
        const query = await pool.request()
                        .input("id", sql.Int, id)
                        .query(sqlQueries.delete);
        return query.recordset;

    }catch(error){
        return error.message;
    }

}

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}