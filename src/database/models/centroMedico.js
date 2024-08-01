import mongoose, { Schema } from "mongoose";

const centroMedicoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
  },
  earth: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  specialties: {
    type: Array,
  },
})

const CentroMedico = mongoose.model('CentroMedico', centroMedicoSchema)
export default CentroMedico