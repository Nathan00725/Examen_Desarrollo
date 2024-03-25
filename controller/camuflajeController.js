import { db } from "../db/conn.js";

const getCamuflaje= async(req, res)=>{

    const sql = `select * from tbl_camuflaje`;

    const result = await db.query(sql);

    res.json(result);

}

const postCamuflaje = async(req, res)=>{ 

    const {camuflaje} = req.body;
    const params = [camuflaje];
    const sql = `insert into tbl_camuflaje
    (camuflaje)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putCamuflaje = async (req, res)=>{

    const { camuflaje } = req.body;
    const {camuflaje_id} = req.params;
    
    const params = [camuflaje, camuflaje_id];

    const sql = `update tbl_camuflaje
    set camuflaje = $1
    where camuflaje_id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteCamuflaje = async (req, res)=>{

    const {camuflaje_id} = req.params;
    const params = [ camuflaje_id];

    const sql = `delete from tbl_camuflaje
    where camuflaje_id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getCamuflaje, postCamuflaje, putCamuflaje, deleteCamuflaje}