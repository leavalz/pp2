import * as mongoose from 'mongoose'

export const TareaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Debe ingresar nombre de la tarea'],
        unique: true,
    },
    estado: {
        type: String,
        setDefaultOnInsert: true,
        default: 'No Resuelto',
        enum: ['No Resuelto', 'Resuelto'],
    },
    descripcion: {
        type: String,
        required: [true, 'Debe ingresar descripcion de la tarea'],
    }
})

