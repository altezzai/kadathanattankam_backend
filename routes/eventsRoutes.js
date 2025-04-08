const express = require('express');
const eventsController = require('../controllers/eventsController');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.post('/', authenticateToken, eventsController.createEvent);
router.get('/', eventsController.getAllEvents);
router.get('/latest',eventsController.getLatestEvents);
router.get('/:id', eventsController.getEventById);
router.put('/:id',authenticateToken, eventsController.updateEvent);
router.delete('/:id',authenticateToken, eventsController.deleteEvent);

module.exports = router;
