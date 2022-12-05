import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';

import { VALIDATIONS } from '../utils/validation.utils';
import { Public } from './auth.constants';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('signup')
  async signUp(@Body(VALIDATIONS.BAD_REQUEST) body: CreateUserDto) {
    return this.authService.signUp(body);
  }
}
