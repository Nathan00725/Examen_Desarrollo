import express from "express";
const Accesorios= express();

import {getAccesorios, postAccesorios, putAccesorios, deleteAccesorios} from "../controller/accesoriosController.js";

Accesorios.get('', getAccesorios);
Accesorios.post('', postAccesorios);
Accesorios.put('/:id', putAccesorios);
Accesorios.delete('/:id', deleteAccesorios);

export {Accesorios}