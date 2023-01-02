module.exports = (sequelize, DataTypes) => {
  const weight = sequelize.define("weight", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  weight.associate = (models) => {
    weight.hasMany(models.product, {
      onDelete: "cascade",
      foreignKey: "weight_id",
    });
  };

  return weight;
};
