import { DataTypes } from "sequelize"
import sequelize from "../data/db.js"

import Usuarios from "./usuarios.js"

const Inquilinos = sequelize.define(
    'inquilinos',
    {
        idInquilino: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Usuarios,
                key: 'idUsuario'
            }
        }
    },
    {
        timestamps: false
    }
)

// Relación Inquilinos-Usuarios
Usuarios.hasMany(Inquilinos, {
    foreignKey: 'idUsuario'
})

Inquilinos.belongsTo(Usuarios, {
    foreignKey: 'idUsuario'
})

export default Inquilinos