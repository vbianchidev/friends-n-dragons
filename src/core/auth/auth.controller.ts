import {
  Controller,
  Request,
  UseGuards,
  Post,
  Get,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { VALIDATIONS } from '../utils/validation.utils';
import { Public } from './auth.constants';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @Post('auth/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('auth/signup')
  async signUp(@Body(VALIDATIONS.BAD_REQUEST) body: CreateUserDto) {
    return this.authService.signUp(body);
  }
}
