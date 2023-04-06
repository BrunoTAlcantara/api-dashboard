import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) { }
  async create(data: ProductDto) {
    const product = this.prisma.product.create({
      data,
    });

    return product;
  }

  async findAll() {
    const product = this.prisma.product.findMany();

    return product;
  }
}
