import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("custom_beers_db", "root", "password", {
    dialect: "mysql",
    host: "localhost"
});