module.exports = (sequelize, DataTypes) => {
  const type = sequelize.define("type", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  type.associate = (models) => {
    type.hasMany(models.product, {
      onDelete: "cascade",
      foreignKey: "type_id",
    });
  };

  return type;
};
