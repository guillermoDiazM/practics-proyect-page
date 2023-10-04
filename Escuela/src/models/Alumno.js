import { Schema, model } from "mongoose";

const alumnoEsquema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            inuque: true,
            trim: true,
        },
        paterno: {
            type: String,
            required: true,
            
        },
        materno: {
            type: String,
            required: true,
            
        },
        fechaNac: {
            type: Date,
            required: true,
            
        },
        sexo: {
            type: String,
            required: true,
            
        },
        celular: {
            type: String,
            required: true,
            
        },
        direccion: {
            type: String,
            required: true,
            
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Alumnos", alumnoEsquema);
