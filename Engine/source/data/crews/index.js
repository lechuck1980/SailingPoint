'use strict'

const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const pathSQL = 'crews'

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
            .input("clubId", sql.Int, data.clubId)
            .input("boatId", sql.Int, data.boatId)
            .input("skipperId", sql.Int, data.skipperId)
            .input("mainsailtrimmerId", sql.Int, data.mainsailtrimmerId)
            .input("headsailtrimmer1Id", sql.Int, data.headsailtrimmer1Id)
            .input("headsailtrimmer2Id", sql.Int, data.headsailtrimmer2Id)
            .input("bowmanId", sql.Int, data.bowmanId)
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
            .input("clubId", sql.Int, data.clubId)
            .input("boatId", sql.Int, data.boatId)
            .input("skipperId", sql.Int, data.skipperId)
            .input("mainsailtrimmerId", sql.Int, data.mainsailtrimmerId)
            .input("headsailtrimmer1Id", sql.Int, data.headsailtrimmer1Id)
            .input("headsailtrimmer2Id", sql.Int, data.headsailtrimmer2Id)
            .input("bowmanId", sql.Int, data.bowmanId)
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