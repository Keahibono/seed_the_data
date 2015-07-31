'use strict';
module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define('Products', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,2)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Products.hasMany(models.Inventory);
      }
    }
  });
  return Products;
};