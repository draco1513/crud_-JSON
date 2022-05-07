var config = require('./dbconfig');
const sql = require('mssql');

async function getCategoria(){
    try {
        let pool =await sql.connect(config);
        let categorias = await pool.request().query("select * from TM_Categoria");
    } catch (error) {
        console.log;
    }
}
module.exports={
    getCategoria:getCategoria
}
