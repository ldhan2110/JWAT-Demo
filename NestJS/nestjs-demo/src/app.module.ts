import { Module } from '@nestjs/common';
import {
  DatabaseConfigModule,
  EnvironmentConfigModule,
} from './infrastructure/config';

@Module({
  imports: [EnvironmentConfigModule, DatabaseConfigModule],
})
export class AppModule {}
