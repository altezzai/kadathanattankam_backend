const express = require('express');
const prEventsController = require('../controllers/prEventsController');
const router = express.Router();

router.post('/', prEventsController.createPrEvent);
router.get('/', prEventsController.getAllPrEvents);
router.get('/:id', prEventsController.getPrEventById);
router.put('/:id', prEventsController.updatePrEvent);
router.delete('/:id', prEventsController.deletePrEvent);

module.exports = router;
