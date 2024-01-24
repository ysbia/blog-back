import { faker } from "@faker-js/faker";
import { Post } from "../../../entities/post.entity";
import { define } from "typeorm-seeding";
import * as bcrypt from 'bcrypt';
define(Post, () => {
    const post = new Post();
    post.title = faker.music.songName();
    post.content = faker.lorem.paragraph();
    post.userId = faker.number.int(10);
    return post;
});