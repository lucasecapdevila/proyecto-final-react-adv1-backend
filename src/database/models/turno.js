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
  dia: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  notas: {
    type: String,
    default: '',
  }
})

const Turno = mongoose.model('Usuario', turnoSchema)
export default Turno