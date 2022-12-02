import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/core/base/base.service';

import { Spell, SpellDocument } from './entities/spell.entity';

@Injectable()
export class SpellsService extends BaseService<Spell> {
  constructor(
    @InjectModel(Spell.name)
    private _spellModel: Model<SpellDocument>,
  ) {
    super(_spellModel);
  }
}
