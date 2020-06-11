'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('physicalappearances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      complexion: {
        type: Sequelize.STRING
      },
      bloodgroup: {
        type: Sequelize.STRING
      },
      bodytype: {
        type: Sequelize.STRING
      },
      disability: {
        type: Sequelize.STRING
      },
      criticaldisease: {
        type: Sequelize.STRING
      },
      normaldisease: {
        type: Sequelize.STRING
      },
      fertilitytest: {
        type: Sequelize.STRING
      },
      pressuresugarcount: {
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
    return queryInterface.dropTable('physicalappearances');
  }
};