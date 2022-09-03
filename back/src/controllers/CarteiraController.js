const Carteira = require('../models/Carteira');
const Usuario = require('../models/Usuario');
const Tasks = require('../models/Tasks');
const Recompensa = require('../models/Recompensa');

async function ganhaRecompensa(req, res) {
    const { recompensaId } = req.params
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        let usuario = await Usuario.findByPk(payload.sub);
        const recompensa = await Recompensa.findByPk(recompensaId)
        await usuario.addCarteira(recompensa);
        await Carteira.update(req.body, { where: { recompensaId: recompensaId, usuarioId: payload.sub } });
        return res.status(200).json("Recompensa adicionada a carteira com sucesso.");
    } catch (err) {
        return res.status(500).json({ error: "Não foi possível adicionar a recompensa na carteira." });
    };
};
async function removeRecompensa(req, res) {
    const { recompensaId } = req.params;
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        let usuario = await Usuario.findByPk(payload.sub);
        const recompensa = await Recompensa.findByPk(recompensaId)
        await usuario.removeCarteira(recompensa);
        return res.status(200).json({ msg: "Você removeu uma recompensa" });
    } catch (err) {
        return res.status(500).json({ err: "Erro" });

    }
}
