import Usuario from "../database/models/usuario.js"

export const listarUsuarios = async(req, res) => {
  try {
    const listaUsuarios = await Usuario.find()
    res.status(200).json(listaUsuarios)
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al buscar los usuarios' })
  }
}

export const obtenerUsuario = async(req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id)
    if(!usuarioBuscado){
      return res.status(404).json({ mensaje: 'No existe un usuario con esa ID' })
    }
    res.status(200).json(usuarioBuscado)
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al buscar el usuario' })
  }
}

export const crearUsuario = async(req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body)
    await nuevoUsuario.save()
    res.status(201).json( {mensaje: 'Usuario creado'})
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el usuario' })
  }
}

export const actualizarUsuario = async(req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id)
    if(!usuarioBuscado){
      return res.status(404).json({ mensaje: 'No existe un usuario con esa ID' })
    }
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ mensaje: 'Usuario actualizado' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el usuario' })
  }
}

export const eliminarUsuario = async(req, res) => {
  try {
    const usuarioBuscado = await Usuario.findByIdAndDelete(req.params.id)
    if(!usuarioBuscado){
      return res.status(404).json({ mensaje: 'No existe un usuario con esa ID' })
    }
    res.status(200).json({ mensaje: 'Usuario eliminado' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' })
  }
}