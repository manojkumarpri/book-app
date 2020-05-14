'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('socialBackrounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberid: {
        type: Sequelize.INTEGER
      },
      religion: {
        type: Sequelize.STRING
      },
      community: {
        type: Sequelize.STRING
      },
      caste: {
        type: Sequelize.STRING
      },
      subcaste: {
        type: Sequelize.STRING
      },
      kuladeivam: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      familystatus: {
        type: Sequelize.STRING
      },
      familyvalue: {
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
    return queryInterface.dropTable('socialBackrounds');
  }
};