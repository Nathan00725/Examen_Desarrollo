import express from "express";
const ArmaCamuflaje= express();

import {getArmaCamuflaje, postArmaCamuflaje, putArmaCamuflaje, deleteArmaCamuflaje} from "../controller/armacamuflajeController.js";

ArmaCamuflaje.get('', getArmaCamuflaje);
ArmaCamuflaje.post('', postArmaCamuflaje);
ArmaCamuflaje.put('/:id', putArmaCamuflaje);
ArmaCamuflaje.delete('/:id', deleteArmaCamuflaje);

export {ArmaCamuflaje}