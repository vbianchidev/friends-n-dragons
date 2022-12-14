import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { SpellsModule } from './spells/spells.module';
import { SpellbookModule } from './spellbook/spellbook.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [UserModule, SpellsModule, SpellbookModule, ClassesModule],
})
export class MainModule {}
