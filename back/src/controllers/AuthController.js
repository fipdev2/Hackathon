const Auth = require('../config/auth');
const Usuario = require('../models/Usuario');

async function login(req, res) {
    try {
        const usuario = await Usuario.findOne({ where: { email: req.body.email } })
        if (!usuario) {
            return res.status(404).json('Usuário não cadastrado :(');
        }
        const { password } = req.body;
        if (Auth.checkPassword(password, usuario.hash, usuario.salt)) {
            const token = Auth.generateJWT(usuario);
            return res.status(202).json({ token });
        }
        else {
            return res.status(401).json('Senha incorreta, treinador!')
        }
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}

async function getDetails(req, res) {
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        const usuario = await Usuario.findByPk(payload.sub);
        if (!usuario)
            return res.status(404).json({ message: "Usuário não encontrado" });
        return res.status(200).json({ usuario: usuario });
    } catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = { login, getDetails };
