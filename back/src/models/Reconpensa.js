const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Recompensa = sequelize.define('Recompensa', {

    moeda: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cupom: {
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
        through: "carteira",
        as: "carteira",
        foreignKey: "carteiraRecompensaId"
    }); 
};

module.exports = Recompensa;