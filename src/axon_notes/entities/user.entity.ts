import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  username: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password_hash: string;

  @Column({ type: "integer" })
  balance: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @Column({ type: "timestamp", nullable: true })
  deleted_at: Date | null;

  @Column({ type: "timestamp", nullable: true })
  last_entry: Date | null;
}
