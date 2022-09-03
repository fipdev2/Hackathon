const { Op } = require('sequelize');
const Tasks = require('../models/Tasks');
const Usuario = require('../models/Usuario');

const index = async (req, res) => {
    try {
        const task = await Tasks.findAll();
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const show = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Tasks.findByPk(id);
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const create = async (req, res) => {
    try {
        const task = await Tasks.create(req.body);
        console.log(req.body);
        return res.status(201).json({ message: "Tasks cadastrada com sucesso!", task: task });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Tasks.update(req.body, { where: { id: id } });
        if (updated) {
            const task = await Tasks.findByPk(id);
            return res.status(200).send(user);
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Task não encontrada");
    }
};

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Tasks.destroy({ where: { id: id } });
        if (deleted) {
            return res.status(200).json("Task deletada com sucesso.");
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Task não encontrada.");
    }
};
const addRecompensa = async (req, res) => {
    const { taskId } = req.params;
    const { usuarioId } = req.params;
    try {
        let usuario = await Usuario.findByPk(usuarioId);
        const task = await Tasks.findByPk(taskId);
        await usuario.addCart(task);
        await Carteira.update(req.body, { where: { carteiraRecompensaId: taskId, carteiraRecompensaId: userId } });
        return res.status(200).json("Recompensa adicionada a carteira com sucesso.");
    } catch (err) {
        return res.status(500).json({ error: "Não foi possível adicionar a recompensa na carteira." });
    };
};

module.exports = {
    update,
    destroy,
    create,
    index,
    show,
    addRecompensa
}
