import { faker } from "@faker-js/faker";
import { Comment } from "../../../entities/comment.entity";
import { define } from "typeorm-seeding";
define(Comment, () => {
    const comment = new Comment();
    comment.content = faker.lorem.paragraph();
    comment.postId = faker.number.int(10);
    comment.userId = faker.number.int(10);
    return comment;
});