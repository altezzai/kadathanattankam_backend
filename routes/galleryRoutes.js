const express = require('express');
const galleryController = require('../controllers/galleryController');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const uploadGallery = require('../middleware/uploadGallery');
const { handleMulterError } = require('../utils/errorHandling');

// router.post('/',authenticateToken, galleryController.createGalleryItem);
router.post('/',authenticateToken, handleMulterError(uploadGallery.single('image')), galleryController.createImage);

router.get('/', galleryController.getAllGalleryItems);
router.get('/:id', galleryController.getGalleryItemById);
router.put('/:id', authenticateToken, uploadGallery.single('image'), galleryController.updateGalleryItem);
router.delete('/:id',authenticateToken, galleryController.deleteGalleryItem);

module.exports = router;
