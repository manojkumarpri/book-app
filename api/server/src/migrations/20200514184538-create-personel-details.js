'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('personelDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberid: {
        type: Sequelize.INTEGER
      },
      smoke: {
        type: Sequelize.STRING
      },
      drink: {
        type: Sequelize.STRING
      },
      hobby: {
        type: Sequelize.STRING
      },
      interest: {
        type: Sequelize.STRING
      },
      sports: {
        type: Sequelize.STRING
      },
      fitness: {
        type: Sequelize.STRING
      },
      diet: {
        type: Sequelize.STRING
      },
      politicalview: {
        type: Sequelize.STRING
      },
      humor: {
        type: Sequelize.STRING
      },
      dresstyle: {
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
    return queryInterface.dropTable('personelDetails');
  }
};