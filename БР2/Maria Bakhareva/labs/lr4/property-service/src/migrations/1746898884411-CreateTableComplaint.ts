import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableComplaint1746898884411 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS complaint (
        complaint_id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        property_id INT REFERENCES property(property_id),
        message VARCHAR(255),
        status ComplaintStatus DEFAULT 'created',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS complaint;
    `);
  }
}
