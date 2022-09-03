const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const EspecieController = require('../controllers/EspecieController');
const AuthController = require('../controllers/AuthController');
const FotoController = require('../controllers/FotoController');

const router = require("express").Router();
const passport = require('passport');

//Usuario
router.get('/usuarios', UsuarioController.index);
router.get('/usuarios/:id', UsuarioController.show);
router.post('/usuarios', UsuarioController.create);
router.put('/private/usuarios/:id', UsuarioController.update);
router.delete('/private/usuarios/:id', UsuarioController.destroy);
router.put('/usuarios/verEspecie:especieId', UsuarioController.verEspecies);

//Especie
router.get('/especies', EspecieController.index);
router.get('/especies/:id', EspecieController.show);
router.post('/especies', EspecieController.create);
router.put('/especies/:id', EspecieController.update);
router.delete('/especies/:id', EspecieController.destroy);

//Foto
router.get('/fotos', FotoController.index);
router.get('/fotos/:id', FotoController.show);
router.post('/fotos', FotoController.create);
router.put('/fotos/:id', FotoController.update);
router.delete('/fotos/:id', FotoController.destroy);
router.put('/fotos/tirarFoto:fotoId', FotoController.tirarFoto);
router.put('/fotos/reconhecimento:fotoId/:especieId', FotoController.reconhecimento);




//Auth Routes
router.use('/private', passport.authenticate("jwt", { session: false }));
router.post('/login', AuthController.login);
router.get('/private/getDetails', AuthController.getDetails);





const TasksController = require("../controllers/TasksController");
const RecompensaController = require("../controllers/RempensaController")

// Funções das Tasks
router.post("/Tasks", TasksController.create);
router.get("/Tasks /:id", TasksController.show);
router.get("/Tasks", TasksController.index);
router.put("/Tasks/:id", TasksController.update);
router.delete("/Tasks/:id", TasksController.destroy);
router.post("/Tasks/carteira/:TaksId/:usuaruitId", TasksController.addRecompensa);

// Funções das Recompensa
router.post("/Recompensa", RecompensaController.create);
router.get("/Recompensa /:id", RecompensaController.show);
router.get("/Recompensa", RecompensaController.index);
router.put("/Recompensa/:id", RecompensaController.update);
router.delete("/Recompensa/:id", RecompensaController.destroy);
router.put("/Recompensa/recebeRecompensa/:recompensaId/Tasks/:taskId", RecompensaController.recebeRecompensa);



module.exports = router;