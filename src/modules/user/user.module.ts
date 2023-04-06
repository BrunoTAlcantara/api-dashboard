import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule { }
