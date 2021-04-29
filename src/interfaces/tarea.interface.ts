import { Document } from 'mongoose';

export interface Tarea extends Document {
    nombre: string,
    estado: string,
    descripcion: string,
}