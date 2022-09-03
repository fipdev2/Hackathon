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