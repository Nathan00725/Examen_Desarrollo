import express from "express";
const Fabricante= express();

import {getFabricante, postFabricante, putFabricante, deleteFabricante} from "../controller/fabricanteController.js";

Fabricante.get('', getFabricante);
Fabricante.post('', postFabricante);
Fabricante.put('/:id', putFabricante);
Fabricante.delete('/:id', deleteFabricante);

export {Fabricante}