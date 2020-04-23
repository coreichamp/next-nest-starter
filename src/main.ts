import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RenderService } from 'nest-next';

import { AppModule } from './app.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  server.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  server.enableCors({
    exposedHeaders: ['filename'],
    preflightContinue: true,
  });

  const service = server.get(RenderService);

  service.setErrorHandler(async (err, req, res) => {
    Logger.error(err.response || err);
    // send JSON response
    res.send(err.response);
  });

  await server.listen(process.env.PORT || 3000);
}
bootstrap();
