import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from 'modules/product/product.module';

import * as cors from 'cors';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
