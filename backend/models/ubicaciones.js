import { DataTypes } from "sequelize"
import sequelize from "../data/db.js"

const Ubicaciones = sequelize.define(
    'ubicaciones',
    {
        idUbicacion: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        provincia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        barrio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        altura: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

export default Ubicaciones