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

  async findAllPaged(documentsToSkip = 0, limitOfDocuments?: number) {
    const findQuery = this._spellModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip);

    if (limitOfDocuments) {
      findQuery.limit(limitOfDocuments);
    }
    const data = await findQuery;
    const count = await this._spellModel.count();

    return { count, data };
  }
}
