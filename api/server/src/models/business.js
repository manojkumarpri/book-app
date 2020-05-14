'use strict';
module.exports = (sequelize, DataTypes) => {
  const business = sequelize.define('business', {
    memberid:
    {
      type:DataTypes.INTEGER,
      allowNull: false
    }, 
    businessname: {
      type:DataTypes.STRING,
      allowNull: false
    },
    position: {
      type:DataTypes.STRING,
      allowNull: false
    },
    annualctc: {
      type:DataTypes.STRING,
      allowNull: false
    },
    employeeid: {
      type:DataTypes.STRING,
      allowNull: false
    },
    businessplace: {
      type:DataTypes.STRING,
      allowNull: false
    },
    experience: {
      type:DataTypes.STRING,
      allowNull: false
    },
    totalasset: {
      type:DataTypes.STRING,
      allowNull: false
    },
    totalliability:{
      type:DataTypes.STRING,
      allowNull: false
    },
    house: {
      type:DataTypes.STRING,
      allowNull: false
    },
    ancestorproperty: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {});
  business.associate = function(models) {
    // associations can be defined here
  };
  return business;
};