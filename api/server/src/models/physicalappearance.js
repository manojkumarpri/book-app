'use strict';
module.exports = (sequelize, DataTypes) => {
  const physicalappearance = sequelize.define('physicalappearance', {
    height:{
      type:DataTypes.STRING,
      allowNull: false
    },
    weight:{
      type:DataTypes.STRING,
      allowNull: false
    },
    complexion:{
      type:DataTypes.STRING,
      allowNull: false
    },
    bloodgroup:{
      type:DataTypes.STRING,
      allowNull: false
    },
    bodytype:{
      type:DataTypes.STRING,
      allowNull: false
    },
    disability:{
      type:DataTypes.STRING,
      allowNull: false
    },
    criticaldisease:{
      type:DataTypes.STRING,
      allowNull: false
    },
    normaldisease:{
      type:DataTypes.STRING,
      allowNull: false
    },
    fertilitytest:{
      type:DataTypes.STRING,
      allowNull: false
    },
    pressuresugarcount:{
      type:DataTypes.STRING,
      allowNull: false
    },
    memberid:{
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  physicalappearance.associate = function(models) {
    // associations can be defined here
  };
  return physicalappearance;
};