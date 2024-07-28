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
    default: "Usuario",
  }
})

const Usuario = mongoose.model('Usuario', usuarioSchema)
export default Usuario