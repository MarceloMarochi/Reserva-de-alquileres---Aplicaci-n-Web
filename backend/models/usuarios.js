import { DataTypes } from "sequelize"
import sequelize from "../data/db.js"

const Usuarios = sequelize.define(
    'usuarios',
    {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreUsuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contrasenia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nroTelefono: {
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: false
    }
)

export default Usuarios