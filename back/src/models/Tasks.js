const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Tasks = sequelize.define('Tasks', {

    nome: {
    type: DataTypes.STRING,
    allowNull: false
    },

    presencial: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quiz: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fotografaEspecie: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
Tasks.associate = function(models) {
    Tasks.hasOne(models.Recompensa);
    Tasks.belongsTo(models.User);
};



module.exports = Tasks;