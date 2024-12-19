import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your-db-username",
  password: "your-db-password",
  database: "grocery_booking",
  entities: [__dirname + "/../entities/**/*.ts"],
  synchronize: true,
});
