import { Module } from '@nestjs/common';
import { AppController } from './features/app/app.controller';
import { AppService } from './features/app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './utils/config/db.config';
import { PostsModule } from './features/posts/posts.module';
import { AuthModule } from './features//auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'), // Set the static folder
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    PostsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
