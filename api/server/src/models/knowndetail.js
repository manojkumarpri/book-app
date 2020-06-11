'use strict';
module.exports = (sequelize, DataTypes) => {
  const knowndetail = sequelize.define('knowndetail', {
    relative:{
      type:DataTypes.STRING,
      allowNull: false
    },
    friend:{
      type:DataTypes.STRING,
      allowNull: false
    },
    memberid:{
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  knowndetail.associate = function(models) {
    // associations can be defined here
  };
  return knowndetail;
};