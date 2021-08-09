const { Sequelize, Model } = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:1@localhost:5432/test');
require('../products/models/product.model')(sequelize)

/**
 * Connect and initialize database
 */
const connect = async () => {
    await sequelize.sync({force: true})
}

module.exports = {
    connect,
    sequelize
}