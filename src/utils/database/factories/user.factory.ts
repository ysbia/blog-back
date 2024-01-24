import { faker } from "@faker-js/faker";
import { User } from "../../../entities/user.entity";
import { define } from "typeorm-seeding";
import * as bcrypt from 'bcrypt';
define(User, () => {
    const user = new User();
    user.email = faker.internet.email();
    user.firstName = faker.person.firstName('male');
    user.lastName = faker.person.lastName('male');
    user.password = bcrypt.hashSync("password", 10);
    return user;
});