module.exports = (sequelize, DataTypes) => {
  const preorder = sequelize.define("preorder", {
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  preorder.associate = (models) => {
    preorder.belongsTo(models.user, {
      onDelete: "cascade",
      foreignKey: "user_id",
    });

    preorder.belongsTo(models.product, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });
  };

  return preorder;
};
