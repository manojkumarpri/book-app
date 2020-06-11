'use strict';
module.exports = (sequelize, DataTypes) => {
  const community = sequelize.define('community', {
    religion:{
      type:DataTypes.STRING,
      allowNull: false
    },
    community:{
      type:DataTypes.STRING,
      allowNull: false
    },
    caste:{
      type:DataTypes.STRING,
      allowNull: false
    },
    subcaste:{
      type:DataTypes.STRING,
      allowNull: false
    },
    kuladeivam:{
      type:DataTypes.STRING,
      allowNull: false
    },
    place:{
      type:DataTypes.STRING,
      allowNull: false
    },
    familystatus:{
      type:DataTypes.STRING,
      allowNull: false
    },
    familyvalue:{
      type:DataTypes.STRING,
      allowNull: false
    },
    memberid:{
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  community.associate = function(models) {
    // associations can be defined here
  };
  return community;
};