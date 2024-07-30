import mongoose, { Schema } from "mongoose";


const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true
  },
  rol: {
    type: String,
    enum: ["Administrador", "Médico", "Paciente"],
    default: "Médico",
  }
})

const Usuario = mongoose.model('usuario', usuarioSchema)
export default Usuario