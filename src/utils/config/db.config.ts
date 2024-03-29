import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'mysql-db',
  port: 3306,
  username: 'ussef',
  password: 'ussef',
  database: 'blog',
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  synchronize: true,
  autoLoadEntities: true,
};
