const express = require('express');
const quotationsController = require('../controllers/quotationsController');
const router = express.Router();

router.post('/', quotationsController.createQuotation);
router.get('/', quotationsController.getAllQuotations);
router.get('/:id', quotationsController.getQuotationById);
router.put('/:id', quotationsController.updateQuotation);
router.delete('/:id', quotationsController.deleteQuotation);

module.exports = router;
