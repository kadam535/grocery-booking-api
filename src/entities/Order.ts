import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("simple-array")
  items: string[];

  @Column("decimal")
  totalAmount: number;
}
