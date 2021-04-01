'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOrder extends Model {
    static associate(models) {
      // define association here
      models.Orders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        foreignKey: 'orderId',
        onDelete: 'CASCADE',
        hooks: true
      });

      models.Products.belongsToMany(models.Orders, {
        through: 'ProductsOrders',
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        hooks: true
      });
      
    }
  };
  ProductsOrder.init({
    productId: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsOrder',
  });
  return ProductsOrder;
};