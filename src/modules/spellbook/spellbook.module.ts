import { Module } from '@nestjs/common';
import { SpellsbookService } from './spellbook.service';
import { SpellbookController } from './spellbook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Spellbook, SpellbookSchema } from './entities/spellbook.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Spellbook.name, schema: SpellbookSchema },
    ]),
  ],

  controllers: [SpellbookController],
  providers: [SpellsbookService],
  exports: [SpellsbookService],
})
export class SpellbookModule {}
