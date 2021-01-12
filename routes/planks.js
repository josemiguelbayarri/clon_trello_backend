const router = require('express').Router();
const PlankController = require('../controllers/plankController');



router.post('/create', PlankController.create);
router.get('/:id', PlankController.getPlankByBoardId);


module.exports = router;