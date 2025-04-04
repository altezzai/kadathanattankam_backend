const express = require('express');
const galleryController = require('../controllers/galleryController');
const router = express.Router();

router.post('/', galleryController.createGalleryItem);
router.get('/', galleryController.getAllGalleryItems);
router.get('/:id', galleryController.getGalleryItemById);
router.put('/:id', galleryController.updateGalleryItem);
router.delete('/:id', galleryController.deleteGalleryItem);

module.exports = router;
