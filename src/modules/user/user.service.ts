import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcrypt';
import { Model } from 'mongoose';
import { BaseService } from 'src/core/base/base.service';

import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectModel(User.name)
    private _userModel: Model<UserDocument>,
  ) {
    super(_userModel);
  }

  async findAccount(credentials: {
    username: string;
    password: string;
  }): Promise<boolean> {
    const user = await this._userModel.findOne({
      username: credentials.username,
    });

    if (!user) return false;
    return await compare(credentials.password, user.password);
  }

  async signUp(body: CreateUserDto) {
    const newUser = {
      email: body.email,
      username: body.username,
      password: body.password,
    };
    return await this._userModel.create(newUser);
  }
}
