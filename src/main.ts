import { join } from 'path';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { RenderService } from 'nest-next';

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const server = await NestFactory.create<NestExpressApplication>(AppModule);

  server.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  server.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static/' });

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

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}
bootstrap();
