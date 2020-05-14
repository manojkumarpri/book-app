'use strict';
module.exports = (sequelize, DataTypes) => {
  const education = sequelize.define('education', {
    primaryschool:{
      type:DataTypes.STRING,
      allowNull: false
    },
    primaryyop:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    highschool:{
      type:DataTypes.STRING,
      allowNull: false
    },
    highyop:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstdegreecollege: {
      type:DataTypes.STRING,
      allowNull: false
    },
    firstdegreeyop:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lastdegreecollege: {
      type:DataTypes.STRING,
      allowNull: false
    },
    lastdegreeyop:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    memberid:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  education.associate = function(models) {
    // associations can be defined here
  };
  return education;
};