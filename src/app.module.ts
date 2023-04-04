import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose'; 
import { Module } from '@nestjs/common';
//import { ServeStaticModule } from '@nesjs/serve-static';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
  /*ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
})],*/

MongooseModule.forRoot('mongodb://localhost:27017/Todo'),
  ]
})

export class AppModule {}
