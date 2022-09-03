const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Recompensa = sequelize.define('Recompensa', {

    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantidade: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
});
Recompensa.associate = function (models) {
    Recompensa.hasOne(models.Tasks);
    Recompensa.belongsToMany(models.Usuario, {
        through: models.Carteira,
        as: "carteiraRecompensa",
        foreignKey: "carteiraId"
    });
};

module.exports = Recompensa;