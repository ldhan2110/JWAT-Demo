import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { Class } from './entities/class.entity';
import { ApplicationException } from '@src/common/filter/application.exception';

@Injectable()
export class ClassService {
  constructor(
    @Inject('ANOTHER_MOCK_SERVICE')
    private readonly anotherMockService,
  ) {}

  private classList: Class[] = [
    {
      id: 'CLS-001',
      className: 'Lớp 10A1',
    },
  ];

  create(createClassDto: CreateClassDto) {
    if (this.classList.some((item) => item.id == createClassDto.id)) {
      throw new ApplicationException(
        'Duplicate Class ID',
        HttpStatus.BAD_REQUEST,
      );
    } else this.classList.push(createClassDto);
  }

  findClassByClassId(classId: string) {
    return this.classList.find((item) => item.id == classId);
  }

  getAllClass() {
    return this.anotherMockService.getAllClass();
  }

  getAll() {
    return this.classList;
  }
}
