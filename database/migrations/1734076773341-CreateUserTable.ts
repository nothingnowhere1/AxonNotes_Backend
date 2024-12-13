import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'user',
              columns: [
                  {
                      name: 'id',
                      type: 'integer',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'increment',
                  },
                  {
                      name: 'username',
                      type: 'varchar',
                      length: '30',
                      isNullable: false,
                  },
                  {
                      name: 'email',
                      type: 'varchar',
                      length: '100',
                      isNullable: false,
                      isUnique: true,
                  },
                  {
                      name: 'password_hash',
                      type: 'varchar',
                      length: '255',
                      isNullable: false,
                  },
                  {
                      name: 'balance',
                      type: 'integer',
                      default: 0,
                  },
                  {
                      name: 'created_by',
                      type: 'integer',
                      isNullable: false,
                  },
                  {
                      name: 'updated_by',
                      type: 'integer',
                      isNullable: false,
                  },
                  {
                      name: 'created_at',
                      type: 'integer',
                      isNullable: false,
                  },
                  {
                      name: 'updated_at',
                      type: 'integer',
                      isNullable: false,
                  },
                  {
                      name: 'last_entry',
                      type: 'timestamp',
                      isNullable: true,
                  },
              ],
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }
}
