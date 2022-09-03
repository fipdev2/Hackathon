//Importações
const {Op} = require('sequelize')
const Recompensa = require('../models/recompensas');
const Tasks = require('../models/Tasks');

const index = async(req, res) =>{
    try{
        const recompensa = await Recompensa.findAll();
        return res.status(200).json({user});
    } catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const recompensa = await Recompensa.findByPk(id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};

const create = async(req,res) => {
    try{
          const recompensa = await Recompensa.create(req.body);
          console.log(req.body);
          return res.status(201).json({message: "Recompensa cadastrada com sucesso!", recompensa: recompensa});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Recompensa.update(req.body, {where: {id: id}});
        if(updated) {
            const recompensa = await Recompensa.findByPk(id);
            return res.status(200).send(user);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Recompensa não encontrada");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Recompensa.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Recompensa deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Recompensa não encontrada.");
    }
};
// Adicionar Recompensa a Task
const recebeRecompensa= async (req, res) => {
    const { recompensaId } = req.params;
    const { taskId } = req.params;
    try {
        const recompensa = await Recompensa.findByPk(recompensaId);
        const task = await Tasks.findByPk(taskId);
        await recompensa.setUser(task);
        return res.status(200).json();

    } catch (error) {
        return res.status(500).json({error});
    }
};

module.exports = {
    update,
    destroy,
    create,
    index,
    show,
    recebeRecompensa,
}
