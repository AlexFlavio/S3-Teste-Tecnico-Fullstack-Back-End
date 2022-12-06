import { Exclude } from "class-transformer";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Contacts } from "./contacts.entity";
// import { Schedules } from "./schedules_users_propriesties.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  isAdm: boolean;
  @Column({ default: true })
  isActive: boolean;
  @Column()
  @Exclude()
  password: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @OneToMany(() => Contacts, (contacts) => contacts.user)
  contacts: Contacts[];
}