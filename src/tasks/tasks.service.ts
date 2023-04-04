import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService { constructor(
        @InjectModel(Prueba.name)
        private readonly PruebaModel: Model<Prueba>,
    ){}
    async create(CreatePruebaDto: CreatePruebaDto){
        CreatePruebaDto.name = CreatePruebaDto.name.toLocaleLowerCase();
        const prueba = await this.PruebaModel.create(CreatePruebaDto);
        return prueba;
    }

   async findall(){
        return this.PruebaModel.find();
    }

    async findOne(id: string){
        let prueba: Prueba;
        if(!isNaN(+id)){
            prueba = await this.PruebaModel.findOne({no: id});
        }

        if(isValidObjectId(id)){
            prueba = await this.PruebaModel.findById(id);
        }
        if(!prueba && isValidObjectId(id)){
            prueba = await this.PruebaModel.findById(id);
        }

        if(!prueba) {throw new NotFoundException ('No encontrado')};



        return prueba;

    }

    async update(id: string, UpdatePruebaDto: UpdatePruebaDto){
        const prueba = await this.findOne(id);
        if(UpdatePruebaDto.name){
            UpdatePruebaDto.name = UpdatePruebaDto.name.toLocaleLowerCase();

            await prueba.updateOne(UpdatePruebaDto, {new: true});
        } 
        return {...prueba.toJSON(), ...UpdatePruebaDto};
    }

    async remove(id :string){
       const prueba = await this.PruebaModel.findByIdAndDelete(id);
        return 200;
    }

}
