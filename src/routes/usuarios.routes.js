import { Router } from "express";
import { actualizarUsuario, crearUsuario, eliminarUsuario, listarUsuarios, obtenerUsuario } from "../controllers/usuario.controllers.js";


const usuariosRouter = Router()

usuariosRouter.route('/usuarios').get(listarUsuarios).post(crearUsuario)
usuariosRouter.route('/usuarios/:id').get(obtenerUsuario).put(actualizarUsuario).delete(eliminarUsuario)

export default usuariosRouter;