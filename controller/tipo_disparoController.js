import { db } from "../db/conn.js";

const getTipo_Disparo= async(req, res)=>{

    const sql = `select * from tbl_tipo_disparo`;

    const result = await db.query(sql);

    res.json(result);

}

const postTipo_Disparo = async(req, res)=>{ 

    const {tipo} = req.body;
    const params = [tipo];
    const sql = `insert into tbl_tipo_disparo
    (tipo)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putTipo_Disparo = async (req, res)=>{

    const { tipo } = req.body;
    const {id} = req.params;
    
    const params = [tipo, id];

    const sql = `update tbl_tipo_disparo
    set tipo = $1
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteTipo_Disparo = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_tipo_disparo
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getTipo_Disparo, postTipo_Disparo, putTipo_Disparo, deleteTipo_Disparo}