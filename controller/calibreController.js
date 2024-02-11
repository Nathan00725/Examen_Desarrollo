import { db } from "../db/conn.js";

const getCalibre= async(req, res)=>{

    const sql = `select * from tbl_calibre`;

    const result = await db.query(sql);

    res.json(result);

}

const postCalibre = async(req, res)=>{ 

    const {calibre} = req.body;
    const params = [calibre];
    const sql = `insert into tbl_calibre
    (calibre)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putCalibre = async (req, res)=>{

    const { calibre } = req.body;
    const {id} = req.params;
    
    const params = [calibre, id];

    const sql = `update tbl_calibre
    set calibre = $1
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteCalibre = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_calibre
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getCalibre, postCalibre, putCalibre, deleteCalibre}