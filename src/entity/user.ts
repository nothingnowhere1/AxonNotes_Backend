import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("user")
export class User {
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

  @CreateDateColumn({ type: "integer" })
  created_at: Date;

  @UpdateDateColumn({ type: "integer", nullable: true })
  last_entry: Date | null;
}
