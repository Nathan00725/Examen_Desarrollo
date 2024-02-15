import express from "express";
const ArmaAccesorios= express();

import {getArmaAccesorios, postArmaAccesorios, putArmaAccesorios, deleteArmaAccesorios} from "../controller/armaaccesorioController.js";

ArmaAccesorios.get('', getArmaAccesorios);
ArmaAccesorios.post('', postArmaAccesorios);
ArmaAccesorios.put('/:id', putArmaAccesorios);
ArmaAccesorios.delete('/:id', deleteArmaAccesorios);

export {ArmaAccesorios}