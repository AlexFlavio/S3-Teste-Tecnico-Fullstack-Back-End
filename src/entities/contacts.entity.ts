import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  nome: string;
  @Column("text", { array: true })
  emails: string[];
  @Column("text", { array: true })
  telefones: string[];
  @ManyToOne(() => User, { eager: true })
  user: User;
}