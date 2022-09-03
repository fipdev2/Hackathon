const Especie = require('../models/Especie');
const Foto = require('../models/Foto');
const Usuario = require('../models/Usuario');

async function create(req, res) {
    try {
        const foto = await Foto.create(req.body);
        return res
            .status(201)
            .json({ message: 'Foto cadastrada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

async function index(req, res) {
    try {
        const fotos = await Foto.findAll();
        return res.status(200).json({ fotos });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

async function show(req, res) {
    const { id } = req.params;
    try {
        const foto = await Foto.findByPk(id);
        return res.status(200).json({ foto });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

async function update(req, res) {
    const { id } = req.params;
    try {
        const [updated] = await Foto.update(req.body, { where: { id: id } });
        if (updated) {
            const especie = await Foto.findByPk(id);
            return res.status(200).send(especie);
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Foto não encontrada");
    }
};

async function destroy(req, res) {
    const { id } = req.params;
    try {
        const deleted = await Foto.destroy({ where: { id: id } });
        if (deleted) {
            return res.status(200).json("Foto deletada");
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Foto não encontrada");
    }
};

async function tirarFoto(req, res) {
    const { fotoId } = req.params;
    try {
        const foto = await Foto.findByPk(fotoId);
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        const usuario = await Usuario.findByPk(payload.sub);
        await foto.setUsuario(usuario);
        return res.status(200).json({ msg: 'Foto tirada' });

    } catch (error) {
        return res.status(500).json({ error });
    }

};

async function reconhecimento(req, res) {
    const { fotoId, especieId } = req.params;
    try {
        const foto = await Foto.findByPk(fotoId);
        const especie = await Especie.findByPk(especieId);
        await foto.setEspecie(especie);
        return res.status(200).json({ msg: 'Foto tirada' });

    } catch (error) {
        return res.status(500).json({ error });
    }

};




module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    tirarFoto,
    reconhecimento
};