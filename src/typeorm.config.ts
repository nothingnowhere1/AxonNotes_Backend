import { DataSource } from "typeorm";
import CON from "./database/db.connection";

// @ts-ignore
const AppDataSource = new DataSource({
  ...CON,
  entities: [
    __dirname + "/database/axon_notes/entities/*.entity{.ts,.js}",
  ],
  migrations: [
    __dirname + "/database/axon_notes/migrations/*{.ts,.js}",
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error("Error establishing database connection", err);
  });

export default AppDataSource;
