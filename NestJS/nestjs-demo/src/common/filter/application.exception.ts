import { HttpStatus } from '@nestjs/common';

export class ApplicationException {
  private readonly message;
  private readonly status;
  private readonly cause;

  constructor(message: string, status: HttpStatus, cause?: any) {
    this.message = message;
    this.status = status;
    this.cause = cause;
  }

  getMessage() {
    return this.message;
  }

  getStatus() {
    return this.status;
  }

  getCause() {
    return this.cause;
  }
}
