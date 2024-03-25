import express from "express";
const Arma= express();

import {getArma, postArma, putArma, deleteArma} from "../controller/armaController.js";

Arma.get('', getArma);
Arma.post('', postArma);
Arma.put('/:arma_id', putArma);
Arma.delete('/:arma_id', deleteArma);

export {Arma}