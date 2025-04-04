const { Gallery } = require('../models');

// Create a new gallery item
exports.createGalleryItem = async (req, res) => {
    try {
        const galleryItem = await Gallery.create(req.body);
        res.status(201).json(galleryItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all gallery items
exports.getAllGalleryItems = async (req, res) => {
    try {
        const galleryItems = await Gallery.findAll();
        res.json(galleryItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single gallery item by ID
exports.getGalleryItemById = async (req, res) => {
    try {
        const galleryItem = await Gallery.findByPk(req.params.id);
        if (!galleryItem) return res.status(404).json({ error: "Gallery item not found" });
        res.json(galleryItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a gallery item
exports.updateGalleryItem = async (req, res) => {
    try {
        const galleryItem = await Gallery.findByPk(req.params.id);
        if (!galleryItem) return res.status(404).json({ error: "Gallery item not found" });

        await galleryItem.update(req.body);
        res.json(galleryItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a gallery item
exports.deleteGalleryItem = async (req, res) => {
    try {
        const galleryItem = await Gallery.findByPk(req.params.id);
        if (!galleryItem) return res.status(404).json({ error: "Gallery item not found" });

        await galleryItem.destroy();
        res.json({ message: "Gallery item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
