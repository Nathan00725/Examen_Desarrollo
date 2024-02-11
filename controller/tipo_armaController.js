import { db } from "../db/conn.js";

const getTipo_Arma= async(req, res)=>{

    const sql = `select * from tbl_tipo_arma`;

    const result = await db.query(sql);

    res.json(result);

}

const postTipo_Arma = async(req, res)=>{ 

    const {nombre} = req.body;
    const params = [nombre];
    const sql = `insert into tbl_tipo_arma
    (nombre)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putTipo_Arma = async (req, res)=>{

    const { nombre } = req.body;
    const {id} = req.params;
    
    const params = [nombre, id];

    const sql = `update tbl_tipo_arma
    set nombre = $1
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteTipo_Arma = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_tipo_arma
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getTipo_Arma, postTipo_Arma, putTipo_Arma, deleteTipo_Arma}