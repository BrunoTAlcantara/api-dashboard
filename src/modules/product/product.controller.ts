import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post()
  async create(@Body() data: ProductDto) {
    try {
      return this.productService.create(data);
    } catch (error) {
      throw new HttpException('Invalid input', HttpStatus.BAD_REQUEST);
    }
  }
  @Get()
  async findAll() {
    try {
      return this.productService.findAll();
    } catch (error) {
      throw new HttpException('Invalid input', HttpStatus.BAD_REQUEST);
    }
  }
}
