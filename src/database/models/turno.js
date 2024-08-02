import mongoose, { Schema } from "mongoose";

const turnoSchema = new Schema({
  paciente: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
    required: true
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "usuario",
    required: true
  },
  fecha: {
    type: String,
    default: Date.toLocaleString()
  },
  hora: {
    type: String,
    required: true,
  },
  notas: {
    type: String,
  }
})

const Turno = mongoose.model('Turno', turnoSchema)
export default Turno