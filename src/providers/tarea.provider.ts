import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tarea } from '../interfaces/tarea.interface';

@Injectable()
export class TareaProvider {
    constructor(@InjectModel('Tarea') private tareaModel: Model<Tarea>) {}

    async createTarea(tarea: Tarea){
        const found = await this.tareaModel.findOne({nombre: tarea.nombre});

        if(!found){
            const createdTarea = new this.tareaModel(tarea);
            return await createdTarea.save();
        }

        return found;
    }

    async getAllTareas() {
        const tareas = await this.tareaModel.find();
        return tareas;
    }

    async getByNombre(nombre: string){
        return await this.tareaModel.findOne({nombre: nombre});
    }

    async tareaResuelta(nombre: string){
        return await this.tareaModel.findOneAndUpdate({nombre: nombre}, {estado: "Resuelto"},{new: true});
    }


}
