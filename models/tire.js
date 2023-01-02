module.exports = (sequelize, DataTypes) => {
    const tire = sequelize.define('tire', {
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        price: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    })  

    tire.associate = (models) => { 
        tire.hasMany(models.order, {
            onDelete: "cascade", 
            foreignKey: "tire_id"
        })
    }

    return tire; 
}