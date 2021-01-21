const router = require('express').Router();
const TaskController = require('../controllers/taskController');



router.post('/create', TaskController.create);
router.get('/:id', TaskController.getTaskByPlankId);
router.delete('/:id', TaskController.delete);


module.exports = router;