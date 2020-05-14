'use strict';
module.exports = (sequelize, DataTypes) => {
  const myinterest = sequelize.define('myinterest', {
    memberid: {
      type:DataTypes.INTEGER,
      allowNull: false
    },  
    intrestedmemberid: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  myinterest.associate = function(models) {
    // associations can be defined here
  };
  return myinterest;
};