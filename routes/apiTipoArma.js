import express from "express";
const Tipo_Arma= express();

import {getTipo_Arma, postTipo_Arma, putTipo_Arma, deleteTipo_Arma} from "../controller/tipo_armaController.js";

Tipo_Arma.get('', getTipo_Arma);
Tipo_Arma.post('', postTipo_Arma);
Tipo_Arma.put('/:id', putTipo_Arma);
Tipo_Arma.delete('/:id', deleteTipo_Arma);

export {Tipo_Arma}