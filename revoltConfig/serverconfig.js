const { Sequelize } = require('sequelize');
require('dotenv').config()
//-------------------------------------------------------------
//                     -  REFRENCES -
//                  1 ) Sequelize Options (SQOP45)
//                  2 ) Graphql Server Options (GQL9973)
//-------------------------------------------------------------
//********************* Sequelize Options (SQOP45)  ************************ */
const sequelizeOptions = {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}
//*********************Sequelize Options (SQOP45)************************ */
const sequelize = new Sequelize(process.env.DB_URL, sequelizeOptions);
const CONFIG = {
    sequelize: sequelize,
    schema: {
        schema: 'revoltDB'
        // Other model options here
    },
    //Graphql Server Options (GQL9973)
    GraphQlserverOptions: {
        port: 8000,
        endpoint: '/graphql',
        subscriptions: '/subscriptions',
        playground: "/playground",
    }
}







//---------Test DB connection ------------

// const testingPostGre = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// testingPostGre()







module.exports = CONFIG
