'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderedProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderedProduct.belongsTo(models.Order, {
        foreignKeyL: "OrderId",
      });
      OrderedProduct.belongsTo(models.Product, {
        foreignKeyL: "productId",
      });
    }
  }
  OrderedProduct.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderedProduct',
    tableName: 'OrderedProducts',
    underscored: true,
  });
  return OrderedProduct;
};