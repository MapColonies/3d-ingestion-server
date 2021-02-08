import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialCreate1612708708618 implements MigrationInterface {
  name = 'InitialCreate1612708708618';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "requests" ("request_id" uuid NOT NULL, "path" text NOT NULL, "metadata" text NOT NULL, CONSTRAINT "PK_4e7b87d34546d9f21a648aed04d" PRIMARY KEY ("request_id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "requests"`);
  }
}