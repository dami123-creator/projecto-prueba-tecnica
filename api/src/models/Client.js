import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

export const Client = sequelize.define("Client", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
    },
    lastname:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
    },
    online:{
        type:DataTypes.BOOLEAN,
        defaultValue : false
    }
})
