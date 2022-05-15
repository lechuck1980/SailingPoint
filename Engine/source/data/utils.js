'use strict'

const fs = require("fs-extra");
const { pool } = require("mssql");
const {join} = require("path");

const loadSQLQueries = async (foldername) => {
    const filePath = join(process.cwd(), 'source/data', foldername);
    const files = await fs.readdir(filePath);
    const sqlFiles = await files.filter(f => f.endsWith(".sql"));
    const queries = {}

    for(const sqlfile of sqlFiles){
        const query = await fs.readFileSync(join(filePath, sqlfile), {encoding: "UTF-8"});
        
        queries[sqlfile.replace(".sql", "")] = query;
        
    }

    return queries;
}

module.exports = {
    loadSQLQueries
}