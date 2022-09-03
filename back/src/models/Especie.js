const DataTypes = require('sequelize');
const sequelize = require("../config/sequelize");

const Especie = sequelize.define('Especie', {
    descricao: {
        type: DataTypes.STRING,
        allownull: false
    },
    foto: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

Especie.associate = function (models) {
    Especie.belongsTo(models.Usuario),
        Especie.hasMany(models.Foto)
}
module.exports = Especie;