'use strict';
module.exports = (sequelize, DataTypes) => {
  const familyinfo = sequelize.define('familyinfo', {
    fathersdetail:{
      type:DataTypes.STRING,
      allowNull: false
    },
    mothersdetail:{
      type:DataTypes.STRING,
      allowNull: false
    },
    sistersdetail:{
      type:DataTypes.STRING,
      allowNull: false
    },
    brothersdetail:{
      type:DataTypes.STRING,
      allowNull: false
    },
    otherrelationdetails:{
      type:DataTypes.STRING,
      allowNull: false
    },
    memberid:{
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  familyinfo.associate = function(models) {
    // associations can be defined here
  };
  return familyinfo;
};