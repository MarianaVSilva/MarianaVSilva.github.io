import { Schema, model } from "mongoose"

const asignaturaEsquema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        creditos: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        horas: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        opcion: {
            type: Boolean,
            default: false,
        },
        

    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Asignaturas", asignaturaEsquema);
