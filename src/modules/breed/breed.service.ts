import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/core/base/base.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';

@Injectable()
export class BreedService extends BaseService<Breed> {
  constructor(
    @InjectModel(Breed.name)
    private _breedModel: Model<Breed>,
  ) {
    super(_breedModel);
  }

  async newBreed(body: CreateBreedDto) {
    const newBreed = { ...body };
    return await this._breedModel.create(newBreed);
  }

  findAll(): Promise<any[]> {
    return this._breedModel.find().exec();
  }

  async findOne(id: string): Promise<Breed> {
    return this._breedModel.findById(id);
  }

  update(id: string, UpdateBreedDto: UpdateBreedDto) {
    return this._breedModel.findByIdAndUpdate(id, UpdateBreedDto);
  }

  remove(id: string) {
    return this._breedModel.findByIdAndDelete(id).exec();
  }
}
