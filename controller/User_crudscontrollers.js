import { json } from "express";
import { db } from "../db/conn.js";

const getUsuarios = async (req, res) => {

    try {
        const sql = `SELECT a.arma_id, 
        a.nombre_arma, 
        a.id_tipo, 
        t.nombre AS tipo_arma,
        a.id_tipo_disparo, 
        d.tipo AS tipo_disparo,
        a.id_fabricante, 
        f.id AS fabricante_id,
        f.fabricante,
        a.id_calibre, 
        c.calibre AS nombre_calibre,
        u.nombre AS nombre_usuario,
        u.activo 
 FROM tbl_arma a
 JOIN tbl_tipo_arma t ON a.id_tipo = t.id
 JOIN tbl_tipo_disparo d ON a.id_tipo_disparo = d.id
 INNER JOIN tbl_frabricante f ON a.id_fabricante = f.id
 JOIN tbl_calibre c ON a.id_calibre = c.id
 JOIN tbl_usuarios u ON a.id_nombre_usuario = u.nombre_usuario;`;

        const result = await db.query(sql);

        res.json(result);

    } catch (err) {

        res.status(500).json({ mensaje: err.message });

    }
};

const postUsuarios = async (req, res) => {

    try {

        const {
            nombre_usuario,
            correo_electronico,
            contrasena,
            nombre,
            apellido,
            activo
        } = req.body;

        const params = [nombre_usuario,
            correo_electronico,
            contrasena,
            nombre,
            apellido,
           activo];

        const sql = `insert into tbl_usuarios
                (nombre_usuario , correo_electronico , contrasena , 
                nombre , apellido, activo)
                values 
                ($1, $2, $3, $4, $5, $6)
                returning nombre_usuario , 'Usuario creado con exito' mensaje `

        const result = await db.query(sql, params);

        res.json(result);

    } catch (err) {

        res.status(500).json({ mensaje: err.message });

    }

}

const deleteUsuario = async (req, res) => {

    try {
        const { nombre_usuario } = req.params;

        const sql = `update tbl_usuarios
                    set activo = false
                    where nombre_usuario  = $1
                    returning nombre_usuario , 'Actualizacion Exitosa' mensaje `;

        const result = await db.query(sql, [nombre_usuario]);
        console.log(result);
        res.json(result);
    } catch (err) {

        res.status(500).json({ mensaje: err.message });
    }


};


const putUsuario = async (req, res) => {

    try {
        const {
            correo_electronico,
            contrasena,
            nombre,
            apellido,
            activo } = req.body;

        const { nombre_usuario } = req.params;

        console.log(nombre_usuario)

        const sql = ` update tbl_usuarios
        set correo_electronico = $1,
        contrasena = $2,
        nombre = $3,
        apellido = $4,
        activo = $5
        where nombre_usuario = $6
        returning nombre_usuario, 'Usuario Actualizado con Exito' mensaje `;

        const params = [correo_electronico,
            contrasena,
            nombre,
            apellido,
            activo,
            nombre_usuario]

        const result = await db.query(sql, params);
        
        res.json(result);


    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }

}

const getUsuariosId = async (req, res) => {

    try {

        const {nombre_usuario} = req.params;

        const sql = `select a.nombre_usuario ,
                        a.correo_electronico,
                        a.contrasena,
                        a.nombre,
                        a.apellido , 
                        a.id_rol , 
                        b.nombre_rol, 
                        a.activo
                from    tbl_usuarios a 
                inner join  tbl_rol b  on a.id_rol = b.id
                where a.nombre_usuario = $1`;

        const result = await db.query(sql, [nombre_usuario]);

        res.json(result);

    } catch (err) {

        res.status(500).json({ mensaje: err.message });

    }
};

export {
    getUsuarios,
    postUsuarios,
    deleteUsuario,
    getUsuariosId, 
    putUsuario
}