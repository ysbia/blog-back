import { DataSource, DataSourceOptions } from 'typeorm';

export const cliOrmConfig: DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "ussef",
    password: "ussef",
    database: "blog",
    migrations: [
        "src/migrations/**/*.{ts,js}"
    ],
    entities: ['src/entities/*.entity.{ts,js}'],
};

const datasource = new DataSource(cliOrmConfig)

export default  datasource