module.exports = (sequelize, DataTypes) => {
  const forwho = sequelize.define("forwho", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  forwho.associate = (models) => {
    forwho.hasMany(models.product, {
      onDelete: "cascade",
      foreignKey: "forwho_id",
    });
  };

  return forwho;
};
