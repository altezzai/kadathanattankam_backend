const express = require('express');
const eventsController = require('../controllers/eventsController');
const router = express.Router();

router.post('/', eventsController.createEvent);
router.get('/', eventsController.getAllEvents);
router.get('/:id', eventsController.getEventById);
router.put('/:id', eventsController.updateEvent);
router.delete('/:id', eventsController.deleteEvent);

module.exports = router;
