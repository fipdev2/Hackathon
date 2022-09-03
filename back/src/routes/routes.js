const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const EspecieController = require('../controllers/EspecieController');
const AuthController = require('../controllers/AuthController');
const FotoController = require('../controllers/FotoController');

const passport = require('passport');
const router = Router();
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

module.exports = router;


