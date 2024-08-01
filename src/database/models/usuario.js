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
  password: {
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
  },
  verified: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ["Administrador", "Doctor", "Paciente"],
    default: "Paciente",
  }
})

const Usuario = mongoose.model('usuario', usuarioSchema)
export default Usuario