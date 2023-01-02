module.exports = (sequelize, DataTypes) => { 
    const user = sequelize.define('user', {
        user: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        password: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    })  

    user.associate = (models) => {
        user.hasOne(models.basket, {
            onDelete: "cascade", 
            foreignKey: "user_id", 
        })   

        user.hasMany(models.contact, {
            onDelete: "cascade", 
            foreignKey: "user_id", 
        })   


        user.hasMany(models.preorder, {
            onDelete: "cascade", 
            foreignKey: "user_id", 
        })   

        user.hasMany(models.order, {
            onDelete: "cascade", 
            foreignKey: "user_id", 
        })  
    }  
    
    return user; 
}