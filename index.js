//const express = require('express');
import  express  from "express";
const app = express();
import { Tipo_Arma } from "./routes/apiTipoArma.js";
import { Tipo_Disparo } from "./routes/apiTipoDisparo.js";
import { Fabricante } from "./routes/apiFabricante.js";
import { Calibre } from "./routes/apiCalibre.js";
import { Camuflaje } from "./routes/apiCamuflaje.js";
import { Accesorios } from "./routes/apiAccesorios.js";
import { Arma } from "./routes/apiArma.js";
import { ArmaCamuflaje} from "./routes/apiarmacamuflaje.js";
import { ArmaAccesorios } from "./routes/apiArmaAcessorio.js";
import cors from 'cors';


// Middleware 
app.use(express.json());
const corsOptions = {
    origin : 'http://localhost@5432@api_examen', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));

const port = 5000;

app.use('/api/tipoArma', Tipo_Arma);
app.use('/api/tipoDisparo', Tipo_Disparo);
app.use('/api/fabricante', Fabricante);
app.use('/api/calibre', Calibre);
app.use('/api/camuflaje', Camuflaje);
app.use('/api/accesorios', Accesorios);
app.use('/api/arma', Arma);
app.use('/api/armacamuflaje', ArmaCamuflaje);
app.use('/api/armaaccesorio', ArmaAccesorios);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);


});