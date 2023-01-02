module.exports = (sequelize, DataTypes) => {
    const wrap = sequelize.define('wrap', {
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
    })  

    wrap.associate = (models) => { 
        wrap.hasMany(models.order, {
            onDelete: "cascade", 
            foreignKey: "wrap_id"
        })
    }

    return wrap; 
}