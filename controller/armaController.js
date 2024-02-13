import {db} from '../db/conn.js';

const getArma =  async (req, res)=>{
  
    const sql= `SELECT 
    arma.arma_id AS arma_id,
    arma.nombre_arma AS nombre_arma,
    arma.creado AS fecha_creacion_arma,
    tipo.nombre AS tipo_arma,
    disparo.tipo AS tipo_disparo,
    fabricante.fabricante,
    calibre.calibre,
    camuflaje.camuflaje,
    accesorios.boca,
    accesorios.canion,
    accesorios.empunadura,
    accesorios.mira,
    accesorios.culata
 FROM tbl_arma AS arma
 LEFT JOIN tbl_tipo_arma AS tipo ON arma.id_tipo = tipo.id
 LEFT JOIN tbl_tipo_disparo AS disparo ON arma.id_tipo_disparo = disparo.id
 LEFT JOIN tbl_frabricante AS fabricante ON arma.id_fabricante = fabricante.id
 LEFT JOIN tbl_calibre AS calibre ON arma.id_calibre = calibre.id
 LEFT JOIN tbl_arma_camuflaje AS arma_camuflaje ON arma.arma_id = arma_camuflaje.arma_id
 LEFT JOIN tbl_camuflaje AS camuflaje ON arma_camuflaje.camuflaje_id = camuflaje.camuflaje_id
 LEFT JOIN tbl_arma_accesorio AS arma_accesorio ON arma.arma_id = arma_accesorio.arma_id
 LEFT JOIN tbl_accesorios AS accesorios ON arma_accesorio.accesorio_id = accesorios.accesorio_id;`;

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