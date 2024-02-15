import { db } from "../db/conn.js";

const getArmaAccesorios= async(req, res)=>{

    const sql = `select * from tbl_arma_accesorio`;

    const result = await db.query(sql);

    res.json(result);

}

const postArmaAccesorios = async(req, res)=>{ 

    const {arma_id, accesorio_id} = req.body;
    const params = [arma_id, accesorio_id];
    const sql = `insert into tbl_arma_accesorio
    (arma_id, accesorio_id)
    values 
    ($1, $2) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putArmaAccesorios = async (req, res)=>{

    const { arma_id, accesorio_id } = req.body;
    const {id} = req.params;
    
    const params = [arma_id, accesorio_id, id];

    const sql = `update tbl_arma_accesorio
    set arma_id = $1,
    accesorio_id = 2
    where id = $3
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteArmaAccesorios = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_arma_accesorio
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getArmaAccesorios, postArmaAccesorios, putArmaAccesorios, deleteArmaAccesorios}