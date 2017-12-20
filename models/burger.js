module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burgers", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return burger;
};
