import {
  Catch,
  HttpException,
  HttpStatus,
  type ExceptionFilter,
  type ArgumentsHost,
  Logger,
} from '@nestjs/common';
import type { Request, Response } from 'express';

import { Environment } from '@repo/shared';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  private logger = new Logger(CustomExceptionFilter.name);

  constructor(private readonly env: Environment) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();

    if (this.env === Environment.LOCAL) {
      this.logger.error(exception);
    }

    const response = ctx.getResponse<Response>();
    const { url, method } = ctx.getRequest<Request>();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message: string;
    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (
        typeof exceptionResponse === 'object' &&
        'message' in exceptionResponse
      ) {
        message = exceptionResponse.message as string;
      } else {
        message = 'Unknown error';
      }
    } else if (exception instanceof Error) {
      ({ message } = exception);
    } else {
      message = 'Internal server error';
    }

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: url,
      method,
      message,
    };

    response.status(httpStatus).json(responseBody);
  }
}
