module.exports = (sequelize, DataTypes) => {
  const basket_product = sequelize.define("basket_product");

  basket_product.associate = (models) => {
    basket_product.belongsTo(models.basket, {
      onDelete: "cascade",
      foreignKey: "basket_id",
    });

    basket_product.belongsTo(models.product, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });
  };

  return basket_product;
};
