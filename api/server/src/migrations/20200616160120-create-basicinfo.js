'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basicinfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      age: {
        type: Sequelize.INTEGER
      },
      mothername: {
        type: Sequelize.STRING
      },
      fathername: {
        type: Sequelize.STRING
      },
      maritialstatus: {
        type: Sequelize.STRING
      },
      native: {
        type: Sequelize.STRING
      },
      living: {
        type: Sequelize.STRING
      },
      onbehalf: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('basicinfos');
  }
};