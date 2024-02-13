import express from "express";
const Arma= express();

import {getArma, postArma, putArma, deleteArma} from "../controller/armaController.js";

Arma.get('', getArma);
Arma.post('', postArma);
Arma.put('/:id', putArma);
Arma.delete('/:id', deleteArma);

export {Arma}