import app from "./app.js";
import sequelize from "./database/database.js";

import './models/Client.js'

async function main(){
    try {
        await sequelize.sync({force: false})
        app.listen(3000)
        console.log("server litening on port ",3000)
    } catch (error) {
        console.log("Unable to connect to the database ", error)
    }
    
}

main()