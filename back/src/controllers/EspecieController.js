const Especie = require("../models/Especie");

async function create(req, res) {
    try {
        const especie = await Especie.create(req.body);
        return res
            .status(201)
            .json({ message: 'Espécie cadastrada com sucesso', especie: especie });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

async function index(req, res) {
    try {
        const especies = await Especie.findAll();
        return res.status(200).json({ especies });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

async function show(req, res) {
    const { id } = req.params;
    try {
        const especie = await Especie.findByPk(id);
        return res.status(200).json({ especie });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

async function update(req, res) {
    const { id } = req.params;
    try {
        const [updated] = await Especie.update(req.body, { where: { id: id } });
        if (updated) {
            const especie = await Especie.findByPk(id);
            return res.status(200).send(especie);
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Espécie não encontrada");
    }
};

async function destroy(req, res) {
    const { id } = req.params;
    try {
        const deleted = await Especie.destroy({ where: { id: id } });
        if (deleted) {
            return res.status(200).json("Espécie deletada com sucesso.");
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Espécie não encontrada.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
