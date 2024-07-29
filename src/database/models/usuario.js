import mongoose, { Schema } from "mongoose";


const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true
  },
  contrasenaUsuario: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ["Administrador", "Médico", "Paciente"],
    default: "Paciente",
  }
})

const Usuario = mongoose.model('usuario', usuarioSchema)
export default Usuario