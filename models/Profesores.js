import { Schema, model } from "mongoose"

const profesorEsquema = new Schema(
    {
        RFC: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
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
        direccion: {
            type: String,
            required: true,
        },
        celular: {
            type: String,
            required: true,
        },
        profesion: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        numeroEmpleado: {
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

export default model("Profesores", profesorEsquema);