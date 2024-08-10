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
    const {email} = req.body
    const existeEmail = await Usuario.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({mensaje: "Ya existe un usuario con el correo electrónico enviado"});
    }
    const nuevoUsuario = new Usuario(req.body)
    await nuevoUsuario.save()
    res.status(201).json({mensaje: 'Usuario creado'})
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el usuario' })
  }
}

export const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Usuario.findOne({ email });
    if (!user) {
      return res.status(400).json({ mensaje: "Correo o password incorrectos" });
    }
    return res.status(200).json(user, {mensaje: "Login exitoso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al intentar loguear un usuario.",
    });
  }
};

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
    const usuarioBuscado = await Usuario.findById(req.params.id)
    if(!usuarioBuscado){
      return res.status(404).json({ mensaje: 'No existe un usuario con esa ID' })
    }
    await Usuario.findByIdAndDelete(req.params.id)
    res.status(200).json({ mensaje: 'Usuario eliminado' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' })
  }
}