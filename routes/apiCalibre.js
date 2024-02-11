import express from "express";
const Calibre= express();

import {getCalibre, postCalibre, putCalibre, deleteCalibre} from "../controller/calibreController.js";

Calibre.get('', getCalibre);
Calibre.post('', postCalibre);
Calibre.put('/:id', putCalibre);
Calibre.delete('/:id', deleteCalibre);

export {Calibre}