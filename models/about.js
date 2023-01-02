module.exports = (sequelize, DataTypes) => {
    const about = sequelize.define('about', {
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        },  

        description: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
    })  

    about.associate = (models) => {
        about.belongsTo(models.product, {
            onDelete: "cascade", 
            foreignKey: "product_id"
        })
    }

    return about; 
}