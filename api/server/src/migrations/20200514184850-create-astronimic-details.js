'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('astronimicDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberid: {
        type: Sequelize.INTEGER
      },
      raasi: {
        type: Sequelize.STRING
      },
      laknam: {
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.STRING
      },
      birthplace: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      birthtime: {
        type: Sequelize.STRING
      },
      ragukethu: {
        type: Sequelize.STRING
      },
      sevvaithosam: {
        type: Sequelize.STRING
      },
      suitablestars: {
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
    return queryInterface.dropTable('astronimicDetails');
  }
};