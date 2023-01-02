module.exports = (sequelize, DataTypes) => {
  const basket = sequelize.define("basket");

  basket.associate = (models) => {
    basket.belongsTo(models.user, {
      onDelete: "cascade",
      foreignKey: "user_id",
    });

    basket.hasMany(models.basket_product, {
      onDelete: "cascade",
      foreignKey: "basket_id",
    });
  };

  return basket;
};
