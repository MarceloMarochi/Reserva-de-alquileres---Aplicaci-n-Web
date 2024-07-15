import { DataTypes } from "sequelize"
import sequelize from "../data/db.js"

import Inquilinos from "./inquilinos.js"

const DetallesAlquileres = sequelize.define(
    'detallesalquileres',
    {
        idDetalleAlquiler: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idInquilino: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Inquilinos,
                key: 'idInquilino'
            }
        },
        precioTotal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cantidadNoches: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

// Relación DetallesAlquileres-Inquilinos
Inquilinos.hasMany(DetallesAlquileres, {
    foreignKey: 'idInquilino'
})

/* Inquilinos.hasOne(DetallesAlquileres, {
    foreignKey: 'idInquilino'
})
 */
DetallesAlquileres.belongsTo(Inquilinos, {
    foreignKey: 'idInquilino'
})

export default DetallesAlquileres