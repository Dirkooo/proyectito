import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Prueba extends Document{
    @Prop({
        unique: true,
        index: true,
    })
    name: string

    @Prop({
        unique: true,
        index: true,
    })
    no: number;
    
    @Prop({
        unique: true,
        index: true,
    })
    description: string;


}

export const PruebaSchema = SchemaFactory.createForClass(Prueba);
