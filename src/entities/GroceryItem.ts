import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class GroceryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("decimal")
  price: number;

  @Column()
  description: string;

  @Column("int")
  inventory: number;
}
