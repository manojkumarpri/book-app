'use strict';
 var sequelize =require ('sequelize');
module.exports = (sequelize, DataTypes) => {
  const followed = sequelize.define('followed', {
    memberid:{
      type:DataTypes.INTEGER,
      allowNull: false
    },  
    followedmemberid:{
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
    
    allowNull: false
    }
  }, {});
  followed.associate = function(models) {
    // associations can be defined here
  };
  return followed;
};