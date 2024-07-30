import { Router } from "express";
import { actualizarTurno, crearTurno, eliminarTurno, listarTurnos, obtenerTurno } from "../controllers/turno.controllers.js";

const turnosRouter = Router()

turnosRouter.route('/turnos').get(listarTurnos).post(crearTurno)
turnosRouter.route('/turnos/:id').get(obtenerTurno).put(actualizarTurno).delete(eliminarTurno)

export default turnosRouter;