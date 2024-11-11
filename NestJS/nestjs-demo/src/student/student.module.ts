import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentMiddleware } from './student.middleware';
import { ClassModule } from 'src/class/class.module';

const mockService = {
  runMockService() {
    return 'This is mock service. Will be updating soon...';
  },
};

@Module({
  imports: [ClassModule],
  controllers: [StudentController],
  providers: [
    StudentService,
    {
      provide: 'MOCK_SERVICE',
      useValue: mockService,
    },
  ],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(StudentMiddleware).forRoutes(StudentController);
  }
}
