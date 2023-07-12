import  Sequelize  from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "C:\\Users\\Damym\\OneDrive\\Escritorio\\database.db",
});

export default sequelize;
