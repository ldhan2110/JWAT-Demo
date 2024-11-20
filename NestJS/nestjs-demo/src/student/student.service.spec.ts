import { StudentService } from './student.service';
import { ClassService } from '@src/class/class.service';

describe('StudentService', () => {
  let service: StudentService;
  let classService: ClassService;

  beforeEach(async () => {
    classService = new ClassService({ getAllClass: jest.fn() });
    service = new StudentService(classService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Test Get All Class', () => {
    jest.spyOn(classService, 'getAllClass').mockReturnValue('Hello World');

    const result = service.getAllClass();

    expect(result).toBe('Hello World');
  });
});
