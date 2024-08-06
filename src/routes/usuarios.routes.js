import { Router } from "express";
import { actualizarUsuario, crearUsuario, eliminarUsuario, listarUsuarios, login, obtenerUsuario } from "../controllers/usuario.controllers.js";

const usuariosRouter = Router()

usuariosRouter.route('/usuarios/registrar').post(crearUsuario)
usuariosRouter.route('/usuarios').get(listarUsuarios)
usuariosRouter.route('/usuarios/:id').get(obtenerUsuario).put(actualizarUsuario).delete(eliminarUsuario)
usuariosRouter.route('/').post(login)

export default usuariosRouter;