module.exports = (sequelize, DataTypes) => {
    const equipment = sequelize.define('equipment', {
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    })  

    equipment.associate = (models) => { 
        equipment.hasMany(models.order, {
            onDelete: "cascade", 
            foreignKey: "equipment_id"
        })
    }

    return equipment; 
}