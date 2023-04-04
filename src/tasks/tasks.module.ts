import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Prueba, PruebaSchema } from './Entities/tasks.entity';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    MongooseModule.forFeature([{
      name: Prueba.name,
      schema: PruebaSchema,
    }])
  ]
})
export class TasksModule {}
