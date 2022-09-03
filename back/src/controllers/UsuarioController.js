const Usuario = require("../models/Usuario");
const Auth = require('../config/auth');
const Especie = require("../models/Especie");

async function create(req, res) {
    try {
        const { password } = req.body;
        const HashSalt = Auth.generatePassword(password);
        const salt = HashSalt.salt;
        const hash = HashSalt.hash;
        const newUsuario = {

            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            foto: req.body.foto,
            hash: hash,
            salt: salt

        };
        const usuario = await Usuario.create(newUsuario);
        return res.status(201).json("Usuario registrado com sucesso :D");
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
async function show(req, res) {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        return res.status(200).json({ usuario })
    }
    catch (err) {
        return res.status(500).json("Usuario não encontrado")
    }
}

async function index(req, res) {
    try {
        const usuario = await Usuario.findAll();
        return res.status(200).json({ usuario });
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}


async function update(req, res) {
    const { id } = req.params;
    try {
        const [updated] = await Usuario.update(req.body, { where: { id: id } });
        if (updated) {
            const usuario = await Usuario.findByPk(id);
            return res.status(202).send(usuario);
        }
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
async function destroy(req, res) {
    const { id } = req.params;
    try {
        const deleted = await Usuario.destroy({ where: { id: id } })
        if (deleted) {
            return res.status(202).json("Usuario deletado :(")
        }
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}

async function verEspecies(req, res) {
    const { especieId } = req.params;
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        const usuario = await Usuario.findByPk(payload.sub);
        const especie = await Especie.findByPk(especieId);
        await usuario.setEspecie(especie);
        return res.status(200).json({ msg: 'Usuario pode ver essa especie' });

    } catch (error) {
        return res.status(500).json({ error });
    }

}

module.exports = {
    create, show, index, update, destroy, verEspecies
}

