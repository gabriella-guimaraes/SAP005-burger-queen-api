'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Products.belongsToMany(models.Orders, {
        through: "ProductsOrders",
        foreignKey: "productId",
        onDelete: "CASCADE",
        hooks: true
      })

      models.Orders.belongsToMany(models.Products, {
        through: "ProductsOrders",
        foreignKey: "orderId",
        onDelete: "CASCADE",
        hooks: true
      })
    }
  };
  ProductsOrders.init({
    productId: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });
  return ProductsOrders;
};