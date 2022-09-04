const Tasks = require("../../models/Tasks");
const Taskopicoes = [
    {
        nome: "Resgata Tartaruga",
        descricao: "Vamos procurar tartarugas, encontre uma e nos mande uma foto.",
    },
    {
        nome: "Quiz",
        descricao: "Qual a espécie da tartaruga de procurando o nemo?",
    },
    {
        nome: "Quiz",
        descricao: "O que se pode fazer para diminuir a poluição do mar?",
    },
    {
        nome: "Quiz",
        descricao: "Entre no app 5x na semana",
    },

];

const seedTask = async function () {
    const TaskArray = [];
    try {


        for (let i = 0; i < 3; i++) {

            TaskArray.push({
                nome: Taskopicoes[i].nome,
                descricao: Taskopicoes[i].descricao,
            })
            await Tasks.sync({ force: true });
            await Tasks.bulkCreate(TaskArray)
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = seedTask;