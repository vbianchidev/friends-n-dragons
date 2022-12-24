import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { SpellsModule } from './spells/spells.module';
import { SpellbookModule } from './spellbook/spellbook.module';
import { ClassesModule } from './classes/classes.module';
import { BreedModule } from './breed/breed.module';

@Module({
  imports: [UserModule, SpellsModule, SpellbookModule, ClassesModule, BreedModule],
})
export class MainModule {}
