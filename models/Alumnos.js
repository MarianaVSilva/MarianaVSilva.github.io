import { Schema, model } from "mongoose"

const alumnoEsquema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        paterno: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        materno: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        fechaNacimiento: {
            type: String,
            required: true,
            unique: false,
            trim: true,
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

export default model("Alumnos", alumnoEsquema);
