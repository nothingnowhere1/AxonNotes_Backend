import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1735198951279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "username",
            type: "varchar",
            length: "30",
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
          },
          {
            name: "password_hash",
            type: "varchar",
            length: "255",
          },
          {
            name: "balance",
            type: "integer",
            default: 0,
          },
          {
            name: "created_at",
            type: "integer",
          },
          {
            name: "last_entry",
            type: "integer",
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
