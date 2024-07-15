// Configuración de la base de datos

import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./gestion_alquileres.sqlite",
})

export default sequelize
