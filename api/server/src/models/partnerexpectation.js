'use strict';
module.exports = (sequelize, DataTypes) => {
  const partnerExpectation = sequelize.define('partnerExpectation', {
    memberid:{
      type:DataTypes.INTEGER,
      allowNull: false
    }, 
    generalrequirement: {
      type:DataTypes.STRING,
      allowNull: false
    },
    age:{
      type:DataTypes.INTEGER,
      allowNull: false
    }, 
    height: {
      type:DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type:DataTypes.STRING,
      allowNull: false
    },
    bodytype: {
      type:DataTypes.STRING,
      allowNull: false
    },
    healthstatus: {
      type:DataTypes.STRING,
      allowNull: false
    },
    complexion:{
      type:DataTypes.STRING,
      allowNull: false
    },
    familystatus: {
      type:DataTypes.STRING,
      allowNull: false
    },
    religion: {
      type:DataTypes.STRING,
      allowNull: false
    },
    caste: {
      type:DataTypes.STRING,
      allowNull: false
    },
    subcaste: {
      type:DataTypes.STRING,
      allowNull: false
    },
    education: {
      type:DataTypes.STRING,
      allowNull: false
    },
    profession: {
      type:DataTypes.STRING,
      allowNull: false
    },
    prefferedbusiness: {
      type:DataTypes.STRING,
      allowNull: false
    },
    work: {
      type:DataTypes.STRING,
      allowNull: false
    },
    expectedincome: {
      type:DataTypes.STRING,
      allowNull: false
    },
    prefferedworkingcountry: {
      type:DataTypes.STRING,
      allowNull: false
    },
    prefferedworkingstate: {
      type:DataTypes.STRING,
      allowNull: false
    },
    prefferednativeplace: {
      type:DataTypes.STRING,
      allowNull: false
    },
    prefferedlivingstate:{
      type:DataTypes.STRING,
      allowNull: false
    },
    expectedmatchingstars: {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    expectedhoroscopematch:  {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    diet: {
      type:DataTypes.STRING,
      allowNull: false
    },
    drinkinghabits: {
      type:DataTypes.STRING,
      allowNull: false
    },
    smokinghabits: {
      type:DataTypes.STRING,
      allowNull: false
    },
    maritialstatus: {
      type:DataTypes.STRING,
      allowNull: false
    },
    children: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {});
  partnerExpectation.associate = function(models) {
    // associations can be defined here
  };
  return partnerExpectation;
};