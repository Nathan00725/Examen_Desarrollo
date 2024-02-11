import express from "express";
const Tipo_Disparo= express();

import {getTipo_Disparo, postTipo_Disparo, putTipo_Disparo, deleteTipo_Disparo} from "../controller/tipo_disparoController.js"

Tipo_Disparo.get('', getTipo_Disparo);
Tipo_Disparo.post('', postTipo_Disparo);
Tipo_Disparo.put('/:id', putTipo_Disparo);
Tipo_Disparo.delete('/:id', deleteTipo_Disparo);

export {Tipo_Disparo}