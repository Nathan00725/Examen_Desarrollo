import express from "express";
const Camuflaje= express();

import {getCamuflaje, postCamuflaje, putCamuflaje, deleteCamuflaje} from "../controller/camuflajeController.js";

Camuflaje.get('', getCamuflaje);
Camuflaje.post('', postCamuflaje);
Camuflaje.put('/:camuflaje_id', putCamuflaje);
Camuflaje.delete('/:camuflaje_id', deleteCamuflaje);

export {Camuflaje}