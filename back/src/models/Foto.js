const DataTypes = require('sequelize');
const sequelize = require("../config/sequelize");

const Foto = sequelize.define('Foto', {
    nome: {
        type: DataTypes.TEXT,
        allownull: false
    },
    Localização: {
        type: DataTypes.TEXT,
        allownull: false
    }

})

Foto.associate = function (models) {
    Foto.belongsTo(models.Usuario),
        Foto.belongsTo(models.Especie)
}
module.exports = Foto;

