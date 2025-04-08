const express = require('express');
const quotationsController = require('../controllers/quotationsController');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.post('/',authenticateToken, quotationsController.createQuotation);
router.get('/', quotationsController.getAllQuotations);
router.get('/:id', quotationsController.getQuotationById);
router.put('/:id',authenticateToken, quotationsController.updateQuotation);
router.delete('/:id',authenticateToken, quotationsController.deleteQuotation);

module.exports = router;
