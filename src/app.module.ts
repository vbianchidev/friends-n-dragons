import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule } from '@nestjs/terminus';
import { AuthController } from './core/auth/auth.controller';

import { AuthModule } from './core/auth/auth.module';
import { JwtAuthGuard } from './core/auth/jwt-auth.guard';
import { HealthModule } from './core/health/health.module';
import { MainModule } from './modules/main.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vbianchi:AB123456!@fnd-database.qwwmxia.mongodb.net/fnd',
    ),
    TerminusModule,
    HealthModule,
    MainModule,
    AuthModule,
    MainModule,
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
