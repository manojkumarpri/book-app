'use strict';
module.exports = (sequelize, DataTypes) => {
  const introduction = sequelize.define('introduction', {
    memberid:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {});
  introduction.associate = function(models) {
    // associations can be defined here
  };
  return introduction;
};