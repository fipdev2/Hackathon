const router = require("express").Router();


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
router.put("/Recompensa/recebeRecompensa/:recompensaId/Tasks/:taskId",RecompensaController.recebeRecompensa);



module.exports = router;
