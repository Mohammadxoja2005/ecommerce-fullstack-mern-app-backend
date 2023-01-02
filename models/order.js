module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define("order", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    payment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  order.associate = (models) => {
    order.belongsTo(models.user, {
      onDelete: "cascade",
      foreignKey: "user_id",
    });

    order.belongsTo(models.product, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });

    order.belongsTo(models.equipment, {
      onDelete: "cascade",
      foreignKey: "equipment_id",
    });

    order.belongsTo(models.guarantee, {
      onDelete: "cascade",
      foreignKey: "guarantee_id",
    });

    order.belongsTo(models.tire, {
      onDelete: "cascade",
      foreignKey: "tire_id",
    });

    order.belongsTo(models.wrap, {
      onDelete: "cascade",
      foreignKey: "wrap_id",
    });

    order.belongsTo(models.service, {
      onDelete: "cascade",
      foreignKey: "service_id",
    });
  };

  return order;
};
