'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('education', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primaryschool: {
        type: Sequelize.STRING
      },
      primaryyop: {
        type: Sequelize.INTEGER
      },
      highschool: {
        type: Sequelize.STRING
      },
      highyop: {
        type: Sequelize.INTEGER
      },
      firstdegreecollege: {
        type: Sequelize.STRING
      },
      firstdegreeyop: {
        type: Sequelize.INTEGER
      },
      lastdegreecollege: {
        type: Sequelize.STRING
      },
      lastdegreeyop: {
        type: Sequelize.INTEGER
      },
      memberid: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('education');
  }
};