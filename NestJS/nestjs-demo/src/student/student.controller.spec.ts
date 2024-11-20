import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { ClassService } from '@src/class/class.service';
import { ApplicationException } from '@src/common/filter/application.exception';
import { HttpStatus } from '@nestjs/common';

describe('StudentController', () => {
  let controller: StudentController;
  let service: StudentService;
  const mockService = {
    runMockService: jest.fn(),
  };

  const anotherMockService = {
    getAllClass: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        StudentService,
        ClassService,
        {
          provide: 'MOCK_SERVICE',
          useValue: mockService,
        },
        {
          provide: 'ANOTHER_MOCK_SERVICE',
          useValue: anotherMockService,
        },
      ],
    }).compile();

    controller = module.get<StudentController>(StudentController);
    service = module.get<StudentService>(StudentService);
  });

  describe('Student Controller Unit Test', () => {
    it('Controller should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('Service should be defined', () => {
      expect(service).toBeDefined();
    });

    it('Test Mock Service in Controller', async () => {
      expect(mockService).toBeDefined();
      mockService.runMockService.mockImplementationOnce(() => 'Hello World');
      const result = await controller.runMockService();
      expect(result).toBe('Hello World');
    });

    it('Test Get All Student List in Controller', async () => {
      jest.spyOn(service, 'getAllStudentList').mockImplementationOnce(() => []);
      const result = await controller.findAll();
      expect(result).toEqual([]);
    });

    it('Test Get Student By ID in Controller', async () => {
      const result = await controller.findById('STU-0001');
      expect(result).toEqual([
        {
          name: 'An Le',
          id: 'STU-0001',
          className: 'None',
        },
      ]);
    });

    it('Test Create Student in Controller successs', async () => {
      const result = await controller.createNewStudent({
        name: 'Yuusuke',
        id: 'STU-0004',
        classId: 'CLS-001',
      });

      expect(result).toEqual({
        name: 'Yuusuke',
        id: 'STU-0004',
        classId: 'CLS-001',
      });
    });

    it('Test Create Student in Controller failed', async () => {
      try {
        await controller.createNewStudent({
          name: 'Yuusuke',
          id: 'STU-0001',
          classId: 'CLS-001',
        });
      } catch (err) {
        expect(err).toEqual(
          new ApplicationException(
            'Duplicate Student ID',
            HttpStatus.BAD_REQUEST,
          ),
        );
      }
    });
  });
});
