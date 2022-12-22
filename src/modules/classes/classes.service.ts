import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/core/base/base.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Classes } from './entities/class.entity';

@Injectable()
export class ClassesService extends BaseService<Classes> {
  constructor(
    @InjectModel(Classes.name)
    private _classesModel: Model<Classes>,
  ) {
    super(_classesModel);
  }

  async newSpell(body: CreateClassDto) {
    const newClasses = { ...body };
    return await this._classesModel.create(newClasses);
  }

  findAll(): Promise<any[]> {
    return this._classesModel.find().exec();
  }

  async findOne(id: string): Promise<Classes> {
    return this._classesModel.findById(id);
  }

  update(id: string, UpdateClassDto: UpdateClassDto) {
    return this._classesModel.findByIdAndUpdate(id, UpdateClassDto);
  }

  remove(id: string) {
    return this._classesModel.findByIdAndDelete(id).exec();
  }
}
