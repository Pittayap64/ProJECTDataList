module.exports = (sequelize, DataTypes) => {
    const Broom = sequelize.define('Broom', {
        name: DataTypes.STRING,
        model: DataTypes.STRING,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Broom
}