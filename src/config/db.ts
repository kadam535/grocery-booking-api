import { DataSource } from 'typeorm';
import { GroceryItem } from './models/GroceryItem';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mastercard#28@@80',
  database: 'grocery_db',
  entities: [GroceryItem],
  synchronize: true,
});

export default dataSource;
