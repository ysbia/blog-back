export default {
    type: 'mysql',
    logging: 'true',
    host: 'localhost',
    port: 3306,
    username: 'ussef',
    password: 'ussef',
    database: 'blog',
    autoLoadEntities: true,
    ssl: { rejectUnauthorized: false },
    entities: [__dirname + '/../../**/*.entity.{js,ts}'],
    // migrations: [__dirname + '/../../**/*.migration.{js,ts}'],
    factories: [ 'src/utils/database/factories/**/*{.ts,.js}' ],
    seeds: [ 'src/utils/database/seeds/**/*{.ts,.js}' ]
  }