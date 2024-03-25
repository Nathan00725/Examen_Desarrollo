import { db } from "../db/conn.js";

const getAccesorios= async(req, res)=>{

    const sql = `select * from tbl_accesorios`;

    const result = await db.query(sql);

    res.json(result);

}

const postAccesorios = async(req, res)=>{ 

    const {boca, canion, empunadura, mira, culata} = req.body;
    const params = [boca, canion, empunadura, mira, culata];
    const sql = `insert into tbl_accesorios
    (boca, canion, empunadura, mira, culata)
    values 
    ($1, $2, $3, $4, $5) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putAccesorios = async (req, res)=>{

    const { boca, canion, empunadura, mira, culata } = req.body;
    const {accesorio_id} = req.params;
    
    const params = [boca, canion, empunadura, mira, culata, accesorio_id];

    const sql = `update tbl_accesorios
    set 
    boca        = $1,
    canion      = $2,
    empunadura  = $3,
    mira        = $4,
    culata      = $5
    where accesorio_id    = $6
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteAccesorios = async (req, res)=>{

    const {accesorio_id} = req.params;
    const params = [ accesorio_id];
    console.log(accesorio_id);

    const sql = `delete from tbl_accesorios
    where accesorio_id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}



export {getAccesorios, postAccesorios, putAccesorios, deleteAccesorios}