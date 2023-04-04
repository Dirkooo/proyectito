import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreatePruebaDto } from './dto/create-prueba.dto';
import { privateDecrypt } from 'crypto';
import { Model } from 'mongoose';
import { Prueba } from './Entities/tasks.entity';
import { InjectModel } from '@nestjs/mongoose';
import { UpdatePruebaDto } from './dto/update-prueba.dto';

@Controller('tasks')
export class TasksController {

 
    constructor(private readonly TasksService: TasksService){} 

    @Post()
    create(@Body() CreatePruebaDto: CreatePruebaDto){
        return this.TasksService.create(CreatePruebaDto);
    }

    @Get()
    findAll(){
        return this.TasksService.findall();
    }

    @Get(':id')
    findOne(@Param(':id') id:string){
        return this.TasksService.findOne(id);
    }

    @Patch(':id')
    update(@Param(':id') id:string, @Body() UpdatePruebaDto: UpdatePruebaDto){
        return this.TasksService.update(id, UpdatePruebaDto);
    }

    @Delete(':id')
    remove(@Param(':id') id:string){
        return this.TasksService.remove(id);
    }
    
