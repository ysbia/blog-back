import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { User } from "../../../entities/user.entity";
import { Post } from './../../../entities/post.entity';
import { Comment } from './../../../entities/comment.entity';

export default class InitialSeeder implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        //truncate all tables
        await connection.query('SET FOREIGN_KEY_CHECKS = 0');
        await connection.query('TRUNCATE TABLE `users`');
        await connection.query('TRUNCATE TABLE `posts`');
        await connection.query('TRUNCATE TABLE `comments`');
        await connection.query('SET FOREIGN_KEY_CHECKS = 1');
        
        await factory(User)().createMany(10);
        await factory(Post)().createMany(10);
        await factory(Comment)().createMany(10);
        
        
    }
}
