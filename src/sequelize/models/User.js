const { DataTypes } = require('sequelize');

/**
 * @param {Sequelize} sequelize Subgroup id to query.
 */
module.exports = (sequelize) => {
  sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    signUpType: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    accessToken: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    refreshToken: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  });
};
