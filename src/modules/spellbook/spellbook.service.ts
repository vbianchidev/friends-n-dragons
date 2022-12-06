import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/core/base/base.service';
import { CreateSpellbookDto } from './dto/create-spellbook.dto';
import { Spellbook } from './entities/spellbook.entity';

@Injectable()
export class SpellsbookService extends BaseService<Spellbook> {
  constructor(
    @InjectModel(Spellbook.name) private _spellbookModel: Model<Spellbook>,
  ) {
    super(_spellbookModel);
  }

  async newSpell(body: CreateSpellbookDto) {
    const newSpell = { ...body };
    return await this._spellbookModel.create(newSpell);
  }
  override findAll(): Promise<any[]> {
    return this._spellbookModel
      .find()
      .populate('user', { _id: 1, username: 1 })
      .populate('spells')
      .exec();
  }
}
