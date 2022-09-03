const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Tasks = sequelize.define('Tasks', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },

});
Tasks.associate = function (models) {
    Tasks.hasOne(models.Recompensa);
    Tasks.belongsTo(models.Usuario);
};



module.exports = Tasks;