import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(data: UserDto) {
    const exist = await this.findUser(data.email);
    console.log(exist);
    if (exist) {
      return exist;
    }

    const user = await this.prisma.user.create({
      data,
    });
    console.log('user', user);
    return user;
  }

  async findUser(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      return user;
    }

    return null;
  }
}
