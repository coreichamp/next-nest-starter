import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RenderModule as NextRenderModule } from 'nest-next';
import { ServeStaticModule } from '@nestjs/serve-static';
import Next from 'next';

import { HomeController } from './home/home.controller'


@Module({
  imports: [
    NextRenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' })),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [HomeController],
  providers: [],
})
export class AppModule {}
