const router = require('express').Router();
const PlankController = require('../controllers/plankController');



router.post('/create', PlankController.create);


module.exports = router;