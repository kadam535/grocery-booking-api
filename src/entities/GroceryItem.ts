import { DataSource } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class GroceryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  inventory: number;
}