import { db } from "../db/conn.js";

const getFabricante= async(req, res)=>{

    const sql = `select * from tbl_frabricante`;

    const result = await db.query(sql);

    res.json(result);

}

const postFabricante = async(req, res)=>{ 

    const {fabricante} = req.body;
    const params = [fabricante];
    const sql = `insert into tbl_frabricante
    (fabricante)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putFabricante = async (req, res)=>{

    const { fabricante } = req.body;
    const {id} = req.params;
    
    const params = [fabricante, id];

    const sql = `update tbl_frabricante
    set fabricante = $1
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteFabricante = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_frabricante
    where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getFabricante, postFabricante, putFabricante, deleteFabricante}