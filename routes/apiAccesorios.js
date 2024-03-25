import express from "express";
const Accesorios= express();

import {getAccesorios, postAccesorios, putAccesorios, deleteAccesorios} from "../controller/accesoriosController.js";

Accesorios.get('', getAccesorios);
Accesorios.post('', postAccesorios);
Accesorios.put('/:accesorio_id', putAccesorios);
Accesorios.delete('/:accesorio_id', deleteAccesorios);

export {Accesorios}