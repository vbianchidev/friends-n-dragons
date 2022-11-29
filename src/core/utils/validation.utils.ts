import { HttpStatus, ValidationPipe } from '@nestjs/common';

const BAD_REQUEST = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.BAD_REQUEST,
});

const INTERNAL_ERROR = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
});

export const VALIDATIONS = {
  BAD_REQUEST,
  INTERNAL_ERROR,
};
