module.exports = (sequelize, DataTypes) => {
  const productinfo = sequelize.define("productinfo", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  productinfo.associate = (models) => {
    productinfo.belongsTo(models.product, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });
  };

  return productinfo;
};
