const { Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize(
  process.env.PGDB,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
  }
);

// add models to sequelize object
require('../products/models/product.model')(sequelize);
require('./models/User')(sequelize);

/**
 * Connect and initialize database
 */
const connect = async () => {
  await sequelize.sync({ force: process.env.SEQUELIZE_SYNC});
};

module.exports = {
  connect,
  sequelize,
};
