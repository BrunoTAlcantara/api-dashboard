import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT_URL = 3500;

  await app.listen(PORT_URL);
  console.log(`Rodando na Porta${PORT_URL}`);
}
bootstrap();
