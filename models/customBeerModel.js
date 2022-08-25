import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js"

export const customBeer = sequelize.define("custom_beers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    tagline: {
        type: Sequelize.STRING,
        allowNull: false
    },

    first_brewed: { 
        type: Sequelize.STRING,
        allowNull: false
    },

    description: { 
        type: Sequelize.STRING,
        allowNull: false
    },

    image_url: {
        type: Sequelize.STRING,
        allowNull: false
    },

    abv : {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    ph : {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})