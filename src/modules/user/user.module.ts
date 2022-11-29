import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { hash } from 'bcrypt';

import { User, UserSchema } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.pre<User>('save', async function () {
            const newHash = await hash(this.password, 10);
            this.password = newHash;
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
