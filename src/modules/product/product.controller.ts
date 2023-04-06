import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post()
  async create(@Body() data: ProductDto) {
    return this.productService.create(data);
  }
  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get('/:id')
  async findByUserId(@Param('id') id: string) {
    return this.productService.findByUserId(id);
  }
}
