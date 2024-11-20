import { HttpStatus, Injectable } from '@nestjs/common';
import { ApplicationException } from '@src/common/filter/application.exception';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/createStudent.dto';
import { ClassService } from '@src/class/class.service';

@Injectable()
export class StudentService {
  constructor(private readonly classService: ClassService) {}

  private studentList: Student[] = [
    {
      name: 'An Le',
      id: 'STU-0001',
      className: 'None',
    },
    {
      name: 'Kham Vu',
      id: 'STU-0002',
      className: 'None',
    },
    {
      name: 'Loi Van',
      id: 'STU-0003',
      className: 'None',
    },
  ];

  getAllStudentList() {
    return this.studentList;
  }

  getAllClass() {
    return this.classService.getAllClass();
  }

  getStudentById(id: string) {
    return this.studentList.filter((item) => item.id == id);
  }

  getStudentByIndex(index: number) {
    return this.studentList[index];
  }

  createStudent(student: CreateStudentDto) {
    if (this.studentList.some((item) => item.id == student.id)) {
      throw new ApplicationException(
        'Duplicate Student ID',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      this.studentList.push({
        name: student.name,
        id: student.id,
        className:
          this.classService.findClassByClassId(student.classId).className ?? '',
      });
    }

    return student;
  }

  deleteStudent(id: string) {
    const index = this.studentList.findIndex((item) => item.id == id);
    if (index != -1) {
      return -1;
    }
    return this.studentList.splice(index, 1);
  }
}
