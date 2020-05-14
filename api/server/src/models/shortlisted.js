'use strict';
module.exports = (sequelize, DataTypes) => {
  const shortlisted = sequelize.define('shortlisted', {
    memberid: {
      type:DataTypes.INTEGER,
      allowNull: false
    },  
    shortlistedmemberid: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  shortlisted.associate = function(models) {
    // associations can be defined here
  };
  return shortlisted;
};