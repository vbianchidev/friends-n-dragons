import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Classes, ClassesSchema } from './entities/class.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Classes.name, schema: ClassesSchema }]),
  ],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
