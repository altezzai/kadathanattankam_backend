const express = require('express');
const prEventsController = require('../controllers/prEventsController');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.post('/',authenticateToken, prEventsController.createPrEvent);
router.get('/', prEventsController.getAllPrEvents);
router.get('/latest',prEventsController.getLatestPrEvents);
router.get('/:id', prEventsController.getPrEventById);
router.put('/:id',authenticateToken, prEventsController.updatePrEvent);
router.delete('/:id',authenticateToken, prEventsController.deletePrEvent);

module.exports = router;
