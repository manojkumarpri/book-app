'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('partnerExpectations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberid: {
        type: Sequelize.INTEGER
      },
      generalrequirement: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      bodytype: {
        type: Sequelize.STRING
      },
      healthstatus: {
        type: Sequelize.STRING
      },
      complexion: {
        type: Sequelize.STRING
      },
      familystatus: {
        type: Sequelize.STRING
      },
      religion: {
        type: Sequelize.STRING
      },
      caste: {
        type: Sequelize.STRING
      },
      subcaste: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      prefferedbusiness: {
        type: Sequelize.STRING
      },
      work: {
        type: Sequelize.STRING
      },
      expectedincome: {
        type: Sequelize.STRING
      },
      prefferedworkingcountry: {
        type: Sequelize.STRING
      },
      prefferedworkingstate: {
        type: Sequelize.STRING
      },
      prefferednativeplace: {
        type: Sequelize.STRING
      },
      prefferedlivingstate: {
        type: Sequelize.STRING
      },
      expectedmatchingstars: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      expectedhoroscopematch: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      diet: {
        type: Sequelize.STRING
      },
      drinkinghabits: {
        type: Sequelize.STRING
      },
      smokinghabits: {
        type: Sequelize.STRING
      },
      maritialstatus: {
        type: Sequelize.STRING
      },
      children: {
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
    return queryInterface.dropTable('partnerExpectations');
  }
};