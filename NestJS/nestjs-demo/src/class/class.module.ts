import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';

const classMockService = {
  getAllClass() {
    return [];
  },
};

@Module({
  controllers: [ClassController],
  providers: [ClassService,],
  exports: [ClassService],
})
export class ClassModule {}


ClassVietNamService