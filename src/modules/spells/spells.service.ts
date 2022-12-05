import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/core/base/base.service';

import { CreateSpellDto } from './dto/create-spell.dto';

import { Spell, SpellDocument } from './entities/spell.entity';

@Injectable()
export class SpellsService extends BaseService<SpellDocument> {
  constructor(
    @InjectModel(Spell.name) private _spellModel: Model<SpellDocument>,
  ) {
    super(_spellModel);
  }

  async newSpell(body: CreateSpellDto) {
    const newSpell = { ...body };
    return await this._spellModel.create(newSpell);
  }

  async findAllPaged(page = 0, limit?: number) {
    const findQuery = this._spellModel
      .find()
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const data = await findQuery;
    const count = await this._spellModel.count();

    return { count, data };
  }
}
