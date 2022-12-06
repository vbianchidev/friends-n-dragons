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

  async findOne(id: string): Promise<Spellbook> {
    return this._spellbookModel
      .findById(id)
      .populate('user', { _id: 1, username: 1 })
      .populate('spells')
      .exec();
  }

  async removeSpell(spellbookId: string, spellId) {
    const spellbook = await this._spellbookModel.findById(spellbookId);
    if (spellbook) {
      spellbook.spells = spellbook.spells.filter(
        (spells) => !spells.equals(spellId),
      );
    }
    return await this._spellbookModel.findByIdAndUpdate(spellbookId, spellbook);
  }

  async addSpell(spellbookId: string, spellId) {
    const addspellbook = await this._spellbookModel.findById(spellbookId);
    if (addspellbook) {
      addspellbook.spells.push(spellId);
    }
    return await this._spellbookModel.findByIdAndUpdate(
      spellbookId,
      addspellbook,
    );
  }
}
