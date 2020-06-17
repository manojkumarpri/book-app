'use strict';
module.exports = (sequelize, DataTypes) => {
  const basicinfo = sequelize.define('basicinfo', {
    firstname: {
      type:DataTypes.STRING,
      allowNull: false
    },
    lastname:{
      type:DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type:DataTypes.STRING,
      allowNull: false
    },
    dob:{
      type:DataTypes.DATE,
      allowNull: false
    },
    age:{
      type:DataTypes.INTEGER,
      allowNull: false
    }, 
    mothername:{
      type:DataTypes.STRING,
      allowNull: false
    },
    fathername: {
      type:DataTypes.STRING,
      allowNull: false
    },
    maritialstatus:{
      type:DataTypes.STRING,
      allowNull: false
    },
    native: {
      type:DataTypes.STRING,
      allowNull: false
    },
    living: {
      type:DataTypes.STRING,
      allowNull: false
    },
    onbehalf:{
      type:DataTypes.STRING,
      allowNull: false
    },
    memberid:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    profession: {
      type:DataTypes.STRING,
      allowNull: false
    },
  }, {});
  basicinfo.associate = function(models) {
    // associations can be defined here
  };
  return basicinfo;
};