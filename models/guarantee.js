module.exports = (sequelize, DataTypes) => {
    const guarantee = sequelize.define('guarantee', {
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        price: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    })  

    guarantee.associate = (models) => { 
        guarantee.hasMany(models.order, {
            onDelete: "cascade", 
            foreignKey: "guarantee_id"
        })
    }

    return guarantee; 
}