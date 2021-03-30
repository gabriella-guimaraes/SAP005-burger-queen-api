'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsTo(models.User, {
        foreignKey: "user_id",
      })

      Orders.belongsToMany(models.Products, {
        through: "ProductsOrders",
        as: "orders",
        foreignKey: "orderId",
        onDelete: "CASCADE",
        hooks: true
      })
    }
  };
  Orders.init({
    client_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    table: DataTypes.STRING,
    status: DataTypes.STRING,
    processedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};