import { db } from "../db/conn.js";

const getArmaCamuflaje= async(req, res)=>{

    const sql = `select * from tbl_arma_camuflaje`;

    const result = await db.query(sql);

    res.json(result);

}

const postArmaCamuflaje = async(req, res)=>{ 

    const {arma_id, camuflaje_id} = req.body;
    const params = [arma_id, camuflaje_id];
    const sql = `insert into tbl_arma_camuflaje
    (arma_id, camuflaje_id)
    values 
    ($1, $2) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putArmaCamuflaje = async (req, res)=>{

    const { arma_id, camuflaje_id } = req.body;
    const {id} = req.params;
    
    const params = [arma_id, camuflaje_id, id];

    const sql = `update tbl_arma_camuflaje
    set arma_id = $1,
    camuflaje_id = $2
    where id = $3
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteArmaCamuflaje = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_arma_camuflaje
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getArmaCamuflaje, postArmaCamuflaje, putArmaCamuflaje, deleteArmaCamuflaje}