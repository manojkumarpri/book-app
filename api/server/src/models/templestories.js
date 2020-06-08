'use strict';
module.exports = (sequelize, DataTypes) => {
  const templestories = sequelize.define('templestories', {
    title:{
      type:DataTypes.STRING,
      allowNull: false
    }, 
    createdby:{
      type:DataTypes.STRING,
      allowNull: false
    }, 
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    }, 
    imgurl:{
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {});
  templestories.associate = function(models) {
    // associations can be defined here
  };
  return templestories;
};