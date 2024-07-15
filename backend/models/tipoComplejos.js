import { DataTypes } from "sequelize"
import sequelize from "../data/db.js"

const TipoComplejos = sequelize.define(
    'tipoComplejos', 
    {
        idTipoComplejo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

export default TipoComplejos