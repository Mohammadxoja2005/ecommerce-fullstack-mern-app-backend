module.exports = (sequelize, DataTypes) => {
  const service = sequelize.define("service", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  service.associate = (models) => {
    service.hasMany(models.order, {
      onDelete: "cascade",
      foreignKey: "service_id",
    });
  };

  return service;
};
