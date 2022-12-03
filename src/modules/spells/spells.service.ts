import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateSpellDto } from './dto/create-spell.dto';

import { Spell, SpellDocument } from './entities/spell.entity';

@Injectable()
export class SpellsService {
  [x: string]: any;
  constructor(
    @InjectModel(Spell.name) private _spellModel: Model<SpellDocument>,
  ) {}
  async create(body: CreateSpellDto) {
    const newSpell = {
      name: body.name,
      description: body.description,
      level: body.level,
      conditions: body.conditions,
      damage: body.damage,
      school: body.school,
      castingTime: body.castingTime,
      range: body.range,
      components: body.components,
      duration: body.duration,
    };
    return await this._spellModel.create(newSpell);
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const findQuery = this._spellModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip);

    if (limitOfDocuments) {
      findQuery.limit(limitOfDocuments);
    }
    const results = await findQuery;
    const count = await this._spellModel.count();

    return { results, count };
  }

  async findOne() {
    return await this._spellModel.findOne();
  }
}
