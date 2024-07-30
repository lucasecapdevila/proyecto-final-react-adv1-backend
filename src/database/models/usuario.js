import mongoose, { Schema } from "mongoose";


const usuarioSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
  },
  mp: {
    type: Number
  },
  bio: {
    type: String
  },
  centroMedico: {
    type: Schema.Types.ObjectId,
    ref: "centroMedico"
  },
  hours: {
    type: String,
  },
  phone: {
    type: String,
    require: true
  },
  role: {
    type: String,
    enum: ["Administrador", "Médico", "Paciente"],
    default: "Médico",
  }
})

const Usuario = mongoose.model('usuario', usuarioSchema)
export default Usuario