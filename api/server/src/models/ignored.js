'use strict';
module.exports = (sequelize, DataTypes) => {
  const ignored = sequelize.define('ignored', {
    memberid: {
      type:DataTypes.INTEGER,
      allowNull: false
    },  
    ignoredmemberid: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), 
    
    allowNull: false
    }
  }, {});
  ignored.associate = function(models) {
    // associations can be defined here
  };
  return ignored;
};