import { db } from "../config/db.js";
import { DataTypes } from "sequelize";

const Tanda = db.define('tanda', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    estatus: {
        type: DataTypes.INTEGER
    },
    fecha_inicio: {
        type: DataTypes.DATEONLY
    },
    fecha_final: {
        type: DataTypes.DATEONLY
    },

});