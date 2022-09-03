const Especie = require('../models/Especie');
const Foto = require('../models/Foto');
const DataTypes = require('sequelize');
const sequelize = require("../config/sequelize");

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allownull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allownull: false
    },
    email: {
        type: DataTypes.STRING,
        allownull: false
    },
    foto: {
        type: DataTypes.TEXT,
    },
    hash: {
        type: DataTypes.STRING,
    },
    salt: {
        type: DataTypes.STRING,
    }

})
Usuario.associate = function (models) {
    Usuario.hasMany(models.Foto),
        Usuario.hasMany(models.Tasks)
    Usuario.belongsTo(models.Especie),
        Usuario.belongsToMany(models.Recompensa, {
            through: models.Carteira,
            as: 'UsuarioCarteira',
            foreignKey: 'usuarioId'
        })
}
module.exports = Usuario;