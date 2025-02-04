'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      // define association here
      Products.belongsToMany(models.Orders, {
        through: "ProductsOrders",
        as: "products",
        foreignKey: "productId",
        onDelete: "CASCADE",
        hooks: true
      });
    }
  };
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    sub_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};