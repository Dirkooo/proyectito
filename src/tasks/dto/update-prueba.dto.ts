import {PartialType} from '@nestjs/mapped-types';
import { CreatePruebaDto } from './create-prueba.dto';
import { IsInt, IsPositive, MinLength, min } from 'class-validator/types/decorator/decorators';

export class UpdatePruebaDto extends PartialType(CreatePruebaDto){
    name: string;
    no: number;
    description: string; 

    

}
