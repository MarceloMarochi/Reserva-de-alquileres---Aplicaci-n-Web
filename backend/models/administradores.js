import { DataTypes } from "sequelize"
import sequelize from "../data/db.js"

import Usuarios from "./usuarios.js"

const Administradores = sequelize.define(
    'administradores',
    {
        idAdmin: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
Usuarios.hasMany(Administradores, {
    foreignKey: 'idUsuario'
})

Administradores.belongsTo(Usuarios, {
    foreignKey: 'idUsuario'
})

export default Administradores