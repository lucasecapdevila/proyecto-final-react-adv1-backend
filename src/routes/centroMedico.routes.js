import { Router } from "express";
import { actualizarCentroMedico, crearCentroMedico, eliminarCentroMedico, listarCentrosMedicos, obtenerCentroMedico } from "../controllers/centroMedico.controllers.js";

const centroMedicoRouter = Router()

centroMedicoRouter.route('/centrosMedicos').get(listarCentrosMedicos).post(crearCentroMedico)
centroMedicoRouter.route('/centrosMedicos/:id').get(obtenerCentroMedico).put(actualizarCentroMedico).delete(eliminarCentroMedico)

export default centroMedicoRouter;