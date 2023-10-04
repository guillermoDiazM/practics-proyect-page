import { Schema, model } from "mongoose";

const asignaturaEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      inuque: true,
      trim: true,
    },
    creditos: {
      type: String,
      required: true,
    },
    horas: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Asignatura", asignaturaEsquema);
