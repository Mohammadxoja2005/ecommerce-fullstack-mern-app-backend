module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define("contact", {
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  contact.associate = (models) => {
    contact.belongsTo(models.user, {
      onDelete: "cascade",
      foreignKey: "user_id",
    });
  };

  return contact;
};
