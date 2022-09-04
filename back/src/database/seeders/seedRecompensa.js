const Recompensa = require("../../models/Recompensa");
const Recompensaopicoes = [
    {
        nome: "Cupom",
        descricao: "Vamos procurar tartarugas, encontre uma e nos mande uma foto.",
    },
    {
        nome: "Moeda",
        descricao: "Qual a espécie da tartaruga de procurando o nemo?",
    },
    

];

const seedRecompensa = async function () {
    const RecompensaArray = [];
    try {


        for (let i = 0; i <2; i++) {

            RecompensaArray.push({
                nome: Recompensaopicoes[i].nome,
                descricao: Recompensaopicoes[i].descricao,
            })
            await Recompensa.sync({ force: true });
            await Recompensa.bulkCreate(RecompensaArray)
            
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = seedRecompensa;