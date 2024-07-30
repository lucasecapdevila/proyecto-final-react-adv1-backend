import Turno from "../database/models/turno.js"

export const listarTurnos = async(req, res) => {
  try {
    const listaTurnos = await Turno.find().populate('doctor', 'nombreUsuario rol').populate('paciente', 'nombreUsuario rol')
    res.status(200).json(listaTurnos)
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al buscar los turnos' })
  }
}

export const obtenerTurno = async(req, res) => {
  try {
    const turnoBuscado = await Turno.findById(req.params.id)
    if(!turnoBuscado){
      return res.status(404).json({ mensaje: 'No existe un turno con esa ID' })
    }
    res.status(200).json(turnoBuscado)
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al buscar el turno' })
  }
}

export const crearTurno = async(req, res) => {
  try {
    const {paciente, doctor, fecha, hora, notas } = req.body
    console.log(doctor);

    const nuevoTurno = new Turno({
      paciente,
      doctor,
      fecha: new Date(fecha),
      hora,
      notas
    })
    await nuevoTurno.save()
    res.status(201).json({ mensaje: 'Turno creado'})
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el turno' })
  }
}

export const actualizarTurno = async(req, res) => {
  try {
    const turnoBuscado = await Turno.findTurnoById(req.params.id)
    if(!turnoBuscado){
      return res.status(404).json({ mensaje: 'No existe un turno con esa ID' })
    }
    await Turno.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ mensaje: 'Turno actualizado' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el turno' })
  }
}

export const eliminarTurno = async(req, res) => {
  try {
    const turnoBuscado = await Turno.findById(req.params.id)
    if(!turnoBuscado){
      return res.status(404).json({ mensaje: 'No existe un turno con esa ID' })
    }
    await Turno.findByIdAndDelete(req.params.id)
    res.status(200).json({ mensaje: 'Turno eliminado' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el turno' })
  }
}