'use strict';
module.exports = (sequelize, DataTypes) => {
  const astronimicDetails = sequelize.define('astronimicDetails', {
    memberid: {
      type:DataTypes.INTEGER,
      allowNull: false
    }, 
    raasi:  {
      type:DataTypes.STRING,
      allowNull: false
    },
    laknam: {
      type:DataTypes.STRING,
      allowNull: false
    },
    star:  {
      type:DataTypes.STRING,
      allowNull: false
    },
    birthplace: {
      type:DataTypes.STRING,
      allowNull: false
    },
    birthdate: DataTypes.DATE,
    birthtime:  {
      type:DataTypes.STRING,
      allowNull: false
    },
    ragukethu: {
      type:DataTypes.STRING,
      allowNull: false
    },
    sevvaithosam:  {
      type:DataTypes.STRING,
      allowNull: false
    },
    
    suitablestars:  {
    //  type:DataTypes.ARRAY(JSON),
      type: DataTypes.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('suitablestars'));
        }, 
        set: function(val) {
            return this.setDataValue('suitablestars', JSON.stringify(val));
        },
      allowNull: false
    }
  }, {});
  astronimicDetails.associate = function(models) {
    // associations can be defined here
  };
  return astronimicDetails;
};