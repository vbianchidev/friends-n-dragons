import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { SpellsModule } from './spells/spells.module';
import { SpellbookModule } from './spellbook/spellbook.module';

@Module({
  imports: [UserModule, SpellsModule, SpellbookModule],
})
export class MainModule {}
