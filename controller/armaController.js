import {db} from '../db/conn.js';

const getArma =  async (req, res)=>{
  
    const sql= `SELECT
    a.arma_id,
    a.nombre_arma,
    ta.id AS tipo_arma_id,
    ta.nombre AS tipo_arma,
    td.id AS tipo_disparo_id,
    td.tipo AS tipo_disparo,
    f.id AS fabricante_id,
    f.fabricante,
    c.id AS calibre_id,
    c.calibre,
    ac.boca,
    ac.canion,
    ac.empunadura,
    ac.mira,
    ac.culata,
    cam.camuflaje_id,
    cam.camuflaje
FROM
    tbl_arma a
    INNER JOIN tbl_tipo_arma ta ON a.id_tipo = ta.id
    INNER JOIN tbl_tipo_disparo td ON a.id_tipo_disparo = td.id
    INNER JOIN tbl_frabricante f ON a.id_fabricante = f.id
    INNER JOIN tbl_calibre c ON a.id_calibre = c.id
    LEFT JOIN tbl_arma_camuflaje acam ON a.arma_id = acam.arma_id
    LEFT JOIN tbl_camuflaje cam ON acam.camuflaje_id = cam.camuflaje_id
    LEFT JOIN tbl_arma_accesorio aa ON a.arma_id = aa.arma_id
    LEFT JOIN tbl_accesorios ac ON aa.accesorio_id = ac.accesorio_id;`;

    const result = await db.query(sql);
    res.json(result)
    
}

const postArma = async(req, res)=>{
 
    //Sintaxis de destructuracion de Arma
    const { nombre_arma , id_tipo, id_tipo_disparo, id_fabricante,
            id_calibre} = req.body;
 
     const params =  [nombre_arma, id_tipo, id_tipo_disparo, id_fabricante,
                      id_calibre];
 
     const sql = `insert into tbl_arma 
                 (nombre_arma, id_tipo, id_tipo_disparo, 
                  id_fabricante, id_calibre )
                 values 
                 ($1, $2, $3, $4, $5) returning * `
 
     const result = await db.query(sql , params);
 
     res.json(result);
 }

 const putArma = async (req, res)=>{

    const { nombre_arma , id_tipo, id_tipo_disparo, id_fabricante,
        id_calibre, id_camuflaje} = req.body;

    const {arma_id} = req.params

    const params = [
        nombre_arma,
        id_tipo,
        id_tipo_disparo,
        id_fabricante,
        id_calibre,
        arma_id
    ]
    
    const sql = `update tbl_arma
                  set
                  nombre_arma       = $1,
                  id_tipo           = $2
                  id_tipo_disparo   = $3,
                  id_fabricante     = $4,
                  id_calibre        = $5
                  where arma_id = $6 returning *`;
 
    const result = await db.query(sql, params)
 
    res.json(result);

}

const deleteArma = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_arma where arma_id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getArma, postArma, putArma, deleteArma  }