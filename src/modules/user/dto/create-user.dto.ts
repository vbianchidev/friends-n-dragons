import { IsEmail, IsNotEmpty } from 'class-validator';
import { Match } from 'src/core/decorators/match.decorator';
import { MESSAGES } from 'src/core/utils/messages.utils';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @Match('password', { message: MESSAGES.PASSWORD_NOT_EQUALS })
  @IsNotEmpty()
  confirmartionPassword: string;

  @IsEmail()
  email: string;
}
