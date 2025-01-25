'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Users', {
              id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
              },
              username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
              },
              password: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              created_at: {
                type: DataTypes.DATE,
                allowNull: false,
              },
              updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
              }
            })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Users')
  }
};
