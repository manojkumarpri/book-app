'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('familyinfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fathersdetail: {
        type: Sequelize.STRING
      },
      mothersdetail: {
        type: Sequelize.STRING
      },
      sistersdetail: {
        type: Sequelize.STRING
      },
      brothersdetail: {
        type: Sequelize.STRING
      },
      otherrelationdetails: {
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
    return queryInterface.dropTable('familyinfos');
  }
};