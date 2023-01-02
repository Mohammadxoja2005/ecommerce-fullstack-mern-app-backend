module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    power: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    speed: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    addpower: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  product.associate = (models) => {
    product.hasOne(models.preorder, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });

    product.hasOne(models.basket_product, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });

    product.hasOne(models.order, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });

    product.hasMany(models.image, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });

    product.hasMany(models.productinfo, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });

    product.hasOne(models.about, {
      onDelete: "cascade",
      foreignKey: "product_id",
    });

    product.belongsToMany(models.tag, {
      onDelete: "cascade",
      foreignKey: "product_id",
      through: models.product_tag,
    });

    product.belongsTo(models.category, {
      onDelete: "cascade",
      foreignKey: "category_id",
    });

    product.belongsTo(models.weight, {
      onDelete: "cascade",
      foreignKey: "weight_id",
    });

    product.belongsTo(models.type, {
      onDelete: "cascade",
      foreignKey: "type_id",
    });

    product.belongsTo(models.forwho, {
      onDelete: "cascade",
      foreignKey: "forwho_id",
    });
  };

  return product;
};
