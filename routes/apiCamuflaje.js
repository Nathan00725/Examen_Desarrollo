import express from "express";
const Camuflaje= express();

import {getCamuflaje, postCamuflaje, putCamuflaje, deleteCamuflaje} from "../controller/camuflajeController.js";

Camuflaje.get('', getCamuflaje);
Camuflaje.post('', postCamuflaje);
Camuflaje.put('/:id', putCamuflaje);
Camuflaje.delete('/:id', deleteCamuflaje);

export {Camuflaje}