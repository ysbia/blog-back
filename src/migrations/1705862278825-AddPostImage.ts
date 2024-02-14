import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPostImage1705862278825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE posts ADD image VARCHAR(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE posts DROP COLUMN image`);
    }

}
