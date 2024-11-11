import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpStatus,
} from '@nestjs/common';
import { ApplicationException } from 'src/common/filter/application.exception';

@Injectable()
export class ValidateStudentIdPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, _metadata: ArgumentMetadata) {
    if (typeof value != 'string') {
      throw new ApplicationException(
        'Invalid Student ID Type',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    if (!value.startsWith('STU')) {
      throw new ApplicationException(
        'Student ID must start with STU',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return value;
  }
}
