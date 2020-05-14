'use strict';
module.exports = (sequelize, DataTypes) => {
  const personelDetails = sequelize.define('personelDetails', {
    memberid:{
      type:DataTypes.INTEGER,
      allowNull: false
    }, 
    smoke:{
      type:DataTypes.STRING,
      allowNull: false
    },  
    drink:{
      type:DataTypes.STRING,
      allowNull: false
    },  
    hobby: {
      type:DataTypes.STRING,
      allowNull: false
    },  
    interest: {
      type:DataTypes.STRING,
      allowNull: false
    },  
    sports:{
      type:DataTypes.STRING,
      allowNull: false
    },  
    fitness: {
      type:DataTypes.STRING,
      allowNull: false
    },  
    diet:{
      type:DataTypes.STRING,
      allowNull: false
    },  
    politicalview: {
      type:DataTypes.STRING,
      allowNull: false
    },  
    humor:{
      type:DataTypes.STRING,
      allowNull: false
    },  
    dresstyle: {
      type:DataTypes.STRING,
      allowNull: false
    }  
  }, {});
  personelDetails.associate = function(models) {
    // associations can be defined here
  };
  return personelDetails;
};