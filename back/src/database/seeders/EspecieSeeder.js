const Especie = require("../../models/Especie");
const EspecieTartaruga = [
    {
        nome: "Tartaruga Cabeçuda",
        descricao: "Esta espécie pode chegar até 136 cm de comprimento e seu peso varia de 100 a 180 kg. A Tartaruga Cabeçuda recebe esse nome devido ao tamanho de sua cabeça e por sua uma mandíbula extremamente forte. Sua população estimada é de 60 mil fêmeas em idade reprodutiva. As principais áreas de desova da Tartaruga Cabeçuda no Brasil são no norte da Bahia, Espírito Santo, Rio de Janeiro e Sergipe.",
        foto: "",
    },
    {
        nome: "Tartaruga Verde ",
        descricao: "A Tartaruga Verde pode chegar até 143 cm de comprimento e pesa por volta de 200 kg. Seu habitat é em águas costeiras com muita vegetação e são raramente vistas em alto-mar. A população estimada é de 203 mil fêmeas em idade reprodutiva. As desovas acontecem principalmente na Ilha da Trindade (ES), no Atol das Rocas (RN) e em Fernando de Noronha (PE).",
        foto: "",
    },
    {
        nome: "Tartaruga de Pente",
        descricao: "A Tartaruga de Pente é apontada pela IUCN como a espécie que está em situação mais arriscada de extinção. As principais causas disso são a exploração de seus ovos nas praias, as perdas e a degradação de seu habitat, a captura e o fato de ficarem presas em redes de pesca. Seu comprimento pode chegar até 114 cm e pode pesar até 150 kg. A desova é mais comum no litoral norte da Bahia e Sergipe e no litoral sul do Rio Grande do Norte.",
        foto: "",
    },
    {
        nome: "Tartaruga Gigante",
        descricao: "A Tartaruga gigante é a maior de todas as espécies e também corre risco de extinção. No Brasil já foram registrados animais com até 182 cm de comprimento. Seu peso pode chegar até 700 kg. A população estimada é de 34 mil fêmeas em idade reprodutiva e suas desovas regulares ocorrem no litoral norte do Espírito Santo.",
        foto: "",
    },
    {
        nome: "Tartaruga Oliva",
        descricao: "Lorem ipsum",
        foto: " A Tartaruga Oliva é a menor das espécies encontradas no Brasil. Seu comprimento pode chegar até 82 cm e pesar em média 40 kg. A população estimada mundialmente é de 800 mil fêmeas em idade reprodutiva. A área de desova está localizada entre o litoral sul do estado de Alagoas e o litoral norte da Bahia.",
    },
];

const seedEspecie = async function () {
    const EspecieArray = [];
    try {


        for (let i = 0; i < 5; i++) {

            EspecieArray.push({
                nome: EspecieTartaruga[i].nome,
                descricao: EspecieTartaruga[i].descricao,
                foto: EspecieTartaruga[i].foto
            })
            await Especie.sync({ force: true });
            await Especie.bulkCreate(EspecieArray)
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = seedEspecie;

// Tartaruga Cabeçuda ou Mestiça. (Caretta caretta)
// Tartaruga Verde ou Aruanã
// (Chelonia mydas)
// Tartaruga de Pente ou Legítima. (Eretmochelys imbricata)
// Tartaruga de Couro ou Gigante. (Dermochelys coriacea)
// Tartaruga Oliva. (Lepidochelys olivacea)
// Tartaruga de costas planas (Depressus natator)
// Tartaruga de Kemp (Lepidochelys kempii)