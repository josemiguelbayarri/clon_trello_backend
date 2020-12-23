const router = require('express').Router();
const BoardController = require('../controllers/BoardController');



router.post('/create', BoardController.create);
router.get('/:id', BoardController.getBoardsByUser);
router.get('/board/:id', BoardController.getBoardById);


module.exports = router;