import { DataTypes } from "sequelize"
import sequelize from '../data/db.js'

import TipoComplejos from './tipoComplejos.js'
import Ubicaciones from './ubicaciones.js'

const Complejos = sequelize.define(
    'complejos',
    {
        idComplejo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estadoAlquiler: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        precioPorNoche: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        capacidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idTipoComplejo: {
            type: DataTypes.INTEGER,
            references: {
                model: TipoComplejos,
                key: 'idTipoComplejo'
            }, 
            allowNull: false
        },
        idUbicacion: {
            type: DataTypes.INTEGER,
            references: {
                model: Ubicaciones,
                key: 'idUbicacion'
            },
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

// Relación Complejos-TipoComplejos
TipoComplejos.hasMany(Complejos, {
    foreignKey: 'idTipoComplejo'
})

Complejos.belongsTo(TipoComplejos, {
    foreignKey: 'idTipoComplejo'
})

// Relación Complejos-Ubicaciones
Ubicaciones.hasMany(Complejos, {
    foreignKey: 'idUbicacion'
})

Complejos.belongsTo(Ubicaciones, {
    foreignKey: 'idUbicacion'
})

export default Complejos