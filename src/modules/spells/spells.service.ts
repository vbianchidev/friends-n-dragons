import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/core/base/base.service';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';
import { Spell, spellDocument } from './entities/spell.entity';

@Injectable()
export class SpellsService extends BaseService<Spell> {
  constructor(
    @InjectModel(Spell.name)
    private _spellModel: Model<spellDocument>,
  ) {
    super(_spellModel);
  }
  async create(createspelltDto: CreateSpellDto): Promise<Spell> {
    const createdSpell = new this._spellModel(createspelltDto);
    return createdSpell.save();
  }

  async findAll(): Promise<Spell[]> {
    return this._spellModel.find().exec();
  }
  //   async findOne(id: string) {
  //     return `This action returns a #${id} spell`;
  //   }

  //   async update(id: string, updateSpellDto: UpdateSpellDto) {
  //     return `This action updates a #${id} spell`;
  //   }

  //    async remove(id: number) {
  //     return `This action removes a #${id} spell`;
  //   }
  // }
}
