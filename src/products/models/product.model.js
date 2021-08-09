const { DataTypes, Sequelize, } = require("sequelize");

/**autoClosingBrackets
 * @param {Sequelize} sequelize Subgroup id to query.
 */
module.exports = (sequelize) => {
  sequelize.define("products", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    comparePrice: {
      allowNull: true,
      type: DataTypes.FLOAT
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  });
};
