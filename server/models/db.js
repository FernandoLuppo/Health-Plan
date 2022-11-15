const Sequelize = require("sequelize")
const sequelize = new Sequelize("healthPlans", "root", "40284600", {
    host: "localhost",
    dialect: "mysql",
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamp: true,
    },
    logging: false,
})

module.exports = { Sequelize, sequelize }