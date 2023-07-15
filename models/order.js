"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasMany(models.Product, { foreignKey: "OrderId" });
      Order.belongsTo(models.User, {
        foreignKeyL: "UserId",
      });
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      orderStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "Orders",
      underscored: true,
    }
  );
  return Order;
};
