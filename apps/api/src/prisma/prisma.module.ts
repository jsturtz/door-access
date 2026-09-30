import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Global() // we want the db connection globally available
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
