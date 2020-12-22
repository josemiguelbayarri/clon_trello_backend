const router = require('express').Router();
const BoardController = require('../controllers/BoardController');



router.post('/create', BoardController.create);


module.exports = router;