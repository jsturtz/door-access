import {
  ArgumentsHost,
  Catch,
  ConflictException,
  NotFoundException,
} from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Prisma } from '../generated/prisma/client.js'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    switch (exception.code) {
      case 'P2002':
        return super.catch(
          new ConflictException('A record with that value already exists'),
          host,
        )
      case 'P2025':
        return super.catch(new NotFoundException('Record not found'), host)
      default:
        return super.catch(exception, host)
    }
  }
}
