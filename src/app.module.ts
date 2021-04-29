import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { environments } from './common/environments';
import { TareaSchema } from './models/tarea.model';
import { TareaController } from './controllers/tarea.controller';
import { TareaService } from './services/tarea.service';
import { TareaProvider } from './providers/tarea.provider';

@Module({
  imports: [MongooseModule.forRoot(environments.mongo, {useNewUrlParser: true, useUnifiedTopology: true}),
  MongooseModule.forFeature([{name: 'Tarea', schema: TareaSchema}]),
],
  controllers: [AppController, TareaController],
  providers: [AppService, TareaService, TareaProvider],
})
export class AppModule {}
