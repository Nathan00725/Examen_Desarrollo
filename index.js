//const express = require('express');
import  express  from "express";
import { Tipo_Arma } from "./routes/apiTipoArma";
import { Tipo_Disparo } from "./routes/apiTipoDisparo";
import { Fabricante } from "./routes/apiFabricante";
import { Calibre } from "./routes/apiCalibre";
import { Camuflaje } from "./routes/apiCamuflaje";
import { Accesorios } from "./routes/apiAccesorios";

const app = express();

//middlewares

app.use(express.json());

const port = 6000;

app.use('/api/tipoArma', Tipo_Arma);
app.use('/api/tipoDisparo', Tipo_Disparo);
app.use('/api/fabricante', Fabricante);
app.use('/api/calibre', Calibre);
app.use('/api/camuflaje', Camuflaje);
app.use('api/accesorios', Accesorios);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});