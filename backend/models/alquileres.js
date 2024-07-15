import { DataTypes } from "sequelize"
import sequelize from "../data/db.js"

import Complejos from "./complejos.js"
import DetallesAlquileres from "./detallesAlquileres.js"

const Alquileres = sequelize.define(
    'alquileres',
    {
        idAlquiler: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaDesde: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fechaHasta: {
            type: DataTypes.DATE,
            allowNull: false
        },
        idComplejo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Complejos,
                key: 'idComplejo'
            }
        },
        idDetalleAlquiler: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: DetallesAlquileres,
                key: 'idDetalleAlquiler'
            }
        }
    },
    {
        timestamps: false
    }
)


// Relación Alquileres-Complejos
Complejos.hasMany(Alquileres, {
    foreignKey: 'idComplejo'
})

Alquileres.belongsTo(Complejos, {
    foreignKey: 'idComplejo'
})

// Relación Alquileres-DetallesAlquileres
DetallesAlquileres.hasMany(Alquileres, {
    foreignKey: 'idDetalleAlquiler'
})

Alquileres.belongsTo(DetallesAlquileres, {
    foreignKey: 'idDetalleAlquiler'
})

export default Alquileres