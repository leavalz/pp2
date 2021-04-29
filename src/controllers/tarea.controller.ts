import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Tarea } from '../interfaces/tarea.interface';
import { TareaService } from '../services/tarea.service';

@Controller('tarea')
export class TareaController {
    constructor(private tareaService: TareaService) {}

    @Get()
    async getAllTareas(@Res() res): Promise<Tarea[]> {
        try{
            const tareas = await this.tareaService.getAllTareas();
            return res.status(200).send(tareas);
        } catch(err){
            res.status(500).send(err)
        }
    }

    @Post()
    async createTarea(@Res() res, @Body() tareadata: Tarea): Promise<Tarea> {
        try{
            const tarea = await this.tareaService.createTarea(tareadata)
            return res.status(200).send(tarea)
        } catch(err){
            res.status(500).send(err)
        }
    }

    @Put('/updateEstado/:nombre')
    async updateTarea(@Res() res, @Param('nombre') nombre: string): Promise<Tarea> {
        try{
            const tarea = await this.tareaService.tareaResuelta(nombre);
            return res.status(200).send(tarea);
        } catch(err) {
            res.status(500).send(err)
        }
    }
}
