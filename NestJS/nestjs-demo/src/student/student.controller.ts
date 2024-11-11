import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Scope,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { ApplicationExceptionFilter } from 'src/common/filter/exception.filter';
import { ApplicationException } from 'src/common/filter/application.exception';
import { ValidateStudentIdPipe } from 'src/common/pipes/validateStudentId.pipe';
import { CreateStudentDto } from './dto/createStudent.dto';

@UseFilters(new ApplicationExceptionFilter())
@Controller({ path: 'student', scope: Scope.REQUEST })
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    @Inject('MOCK_SERVICE')
    private readonly mockService,
  ) {}

  @Get()
  findAll() {
    return this.studentService.getAllStudentList();
  }

  @Get('/mockService')
  runMockService() {
    return this.mockService.runMockService();
  }

  @Get(':id')
  @UsePipes(ValidateStudentIdPipe)
  findById(@Param('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Get('/index/:index')
  findByIndex(
    @Param('index', ParseIntPipe)
    index: number,
  ) {
    return this.studentService.getStudentByIndex(index);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createNewStudent(@Body() student: CreateStudentDto) {
    return this.studentService.createStudent(student);
  }

  @Delete('delete/:id')
  deleteStudent(@Param('id') id: string) {
    const result = this.studentService.deleteStudent(id);
    if (result == -1) {
      throw new ApplicationException(
        'No student ID matched to delete.',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return result;
  }
}
