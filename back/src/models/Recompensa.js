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
<<<<<<< Updated upstream
        through: "carteira",
        as: "carteira",
        foreignKey: "carteiraRecompensaId"
=======
        through: models.Carteira,
        as: "carteiraRecompensa",
        foreignKey: "carteiraId"
>>>>>>> Stashed changes
    });
};

module.exports = Recompensa;