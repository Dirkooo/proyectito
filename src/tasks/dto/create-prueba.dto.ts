import { IsInt, IsPositive, min } from "class-validator";
import { isString } from "util";

export class CreatePruebaDto{

    no: number;

   
    name: string;
    description: string;


}
