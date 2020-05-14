'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    aadharno:{
      type:DataTypes.STRING,
      allowNull: false
    },
    firstname:{
      type:DataTypes.STRING,
      allowNull: false
    },
    lastname:{
      type:DataTypes.STRING,
      allowNull: false
    },
    gender:{
      type:DataTypes.STRING,
      allowNull: false
    },
    dob:{
      type:DataTypes.DATE,
      allowNull: false
    },
    memberid:{
      type: DataTypes.INTEGER,
   autoIncrement: true,
   primaryKey: true
   },
    onbehalf: {
      type:DataTypes.STRING,
      allowNull: false
    },
    password:{
      type:DataTypes.STRING,
      allowNull: false
    },
    premium:{
      type:DataTypes.BOOLEAN,
      allowNull: false
    }, 
  
  }, {});
  User.associate = function(models) {
    // associations can be defined here
   
  };
  return User;
};