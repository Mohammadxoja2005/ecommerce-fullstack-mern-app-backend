module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define("category", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  category.associate = (models) => {
    category.hasMany(models.product, {
      onDelete: "cascade",
      foreignKey: "category_id",
    });
  };

  return category;
};
