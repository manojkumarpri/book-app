'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contactinfo = sequelize.define('Contactinfo', {
    mobile:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false
    },
    facebook:{
      type:DataTypes.STRING,
      allowNull: true
    },
    linkedin: {
      type:DataTypes.STRING,
      allowNull: true
    },
    UserMemberid:{
       type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    }
  }, {});
  Contactinfo.associate = function(models) {
    // associations can be defined here
  };
  return Contactinfo;
};