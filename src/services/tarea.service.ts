import { Injectable, NotFoundException } from '@nestjs/common';
import { TareaProvider } from '../providers/tarea.provider';
import { Tarea } from '../interfaces/tarea.interface';

@Injectable()
export class TareaService {

    constructor(private tareaProvider: TareaProvider,) {}

    async createTarea(tarea: Tarea){
        const tareaCreated = await this.tareaProvider.createTarea(tarea);
        return tareaCreated;
    }

    async getAllTareas(): Promise<Tarea[]> {
        const tareas = await this.tareaProvider.getAllTareas();
        return tareas;
    }

    async tareaResuelta(nombre: string): Promise<Tarea> {
        const tarea = await this.tareaProvider.getByNombre(nombre);

        if(!tarea){
            throw new NotFoundException('No existe una tarea con ese nombre')
        }

        const updatedTarea = await this.tareaProvider.tareaResuelta(nombre);
        return updatedTarea;
    }
}
