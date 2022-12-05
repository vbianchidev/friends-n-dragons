import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { SpellsModule } from './spells/spells.module';

@Module({
  imports: [UserModule, SpellsModule],
})
export class MainModule {}
