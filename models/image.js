module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define("image", {
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  image.associate = (models) => {
    image.belongsTo(models.product, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });
  };

  return image;
};
