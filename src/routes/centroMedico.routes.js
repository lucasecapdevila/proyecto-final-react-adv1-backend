import { Router } from "express";
import { actualizarCentroMedico, crearCentroMedico, eliminarCentroMedico, listarCentrosMedicos, obtenerCentroMedico } from "../controllers/centroMedico.controllers.js";

const centroMedicoRouter = Router()

centroMedicoRouter.get('/centrosMedicos').get(listarCentrosMedicos).post(crearCentroMedico)
centroMedicoRouter.get('/centrosMedicos/:id').get(obtenerCentroMedico).put(actualizarCentroMedico).delete(eliminarCentroMedico)

export default centroMedicoRouter;