import CentroMedico from "../database/models/centroMedico.js"

export const listarCentrosMedicos = async(req, res) => {
  try {
    const listaCentrosMedicos = await CentroMedico.find()
    res.status(200).json(listaCentrosMedicos)
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al buscar los centros médicos' })
  }
}

export const obtenerCentroMedico = async(req, res) => {
  try {
    const centroMedicoBuscado = await CentroMedico.findById(req.params.id)
    if(!centroMedicoBuscado){
      return res.status(404).json({ mensaje: 'No existe un centro médico con esa ID' })
    }
    res.status(200).json(centroMedicoBuscado)
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al buscar el centro médico' })
  }
}

export const crearCentroMedico = async(req, res) => {
  try {
    const nuevoCentroMedico = new CentroMedico(req.body)
    await nuevoCentroMedico.save()
    res.status(201).json({ mensaje: 'Centro médico creado'})
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el centro médico' })
  }
}

export const actualizarCentroMedico = async(req, res) => {
  try {
    const centroMedicoBuscado = await CentroMedico.findById(req.params.id)
    if(!centroMedicoBuscado){
      return res.status(404).json({ mensaje: 'No existe un centro médico con esa ID' })
    }
    await CentroMedico.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ mensaje: 'Centro médico actualizado' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el centro médico' })
  }
}

export const eliminarCentroMedico = async(req, res) => {
  try {
    const centroMedicoBuscado = await CentroMedico.findById(req.params.id)
    if(!centroMedicoBuscado){
      return res.status(404).json({ mensaje: 'No existe un centro médico con esa ID' })
    }
    await CentroMedico.findByIdAndDelete(req.params.id)
    res.status(200).json({ mensaje: 'Centro médico eliminado' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el centro médico' })
  }
}