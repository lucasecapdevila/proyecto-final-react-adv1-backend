import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
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
  img: {
    type: String
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