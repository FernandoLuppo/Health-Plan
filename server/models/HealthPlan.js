const db = require("./db")

const HealthPlan = db.sequelize.define("healthPlans", {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    selectPerson: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },

    nameOne: {
        type: db.Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
    },

    nameTwo: {
        type: db.Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
    },

    nameThree: {
        type: db.Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
    },

    nameFour: {
        type: db.Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
    },

    ageOne: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    ageTwo: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    ageThree: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    ageFour: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    priceOne: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    priceTwo: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    priceThree: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    priceFour: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    fullPrice: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    selectPlan: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

})

// HealthPlan.sync({force:true})

module.exports = HealthPlan