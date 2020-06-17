'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberid: {
        type: Sequelize.INTEGER
      },
      businessname: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      annualctc: {
        type: Sequelize.STRING
      },
      employeeid: {
        type: Sequelize.STRING
      },
      businessplace: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      totalasset: {
        type: Sequelize.STRING
      },
      totalliability: {
        type: Sequelize.STRING
      },
      house: {
        type: Sequelize.STRING
      },
      ancestorproperty: {
        type: Sequelize.STRING
      },
      businesscategory: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('businesses');
  }
};