import { Sequelize } from "sequelize";

export const db  = new Sequelize('kratos', 'desarrollo', '!Melendez19', {
    host: '34.209.19.194',
    dialect: 'mysql'
});

try {
    await db.authenticate();
    console.log("la conexion fue exitosa");
} catch (error) {
    console.log(error);
}