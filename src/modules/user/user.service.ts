import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(data: UserDto) {
    const exist = this.findUser(data.email);
    console.log(data);
    if (exist) {
      return exist;
    }

    const user = this.prisma.user.create({
      data,
    });

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
