module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define("tag", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  tag.associate = (models) => {
    tag.belongsToMany(models.product, {
      onDelete: "cascade",
      foreignKey: "tag_id",
      through: models.product_tag,
    });
  };

  return tag;
};
