import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DATABASE_HOST'),
        port: Number(config.get('DATABASE_PORT')),
        username: config.get('DATABASE_USERNAME'),
        password: config.get('DATABASE_PASSWORD'),
        entities: [],
        database: config.get('DATABASE_NAME'),
        retryAttempts: Infinity,
        useUTC: true,
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseConfigModule {}
