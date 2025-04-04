const { News } = require('../models');

// Create News
exports.createNews = async (req, res) => {
    try {
        const news = await News.create(req.body);
        res.status(201).json(news);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All News
exports.getAllNews = async (req, res) => {
    try {
        const news = await News.findAll();
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Single News by ID
exports.getNewsById = async (req, res) => {
    try {
        const news = await News.findByPk(req.params.id);
        if (!news) return res.status(404).json({ error: "News not found" });
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update News
exports.updateNews = async (req, res) => {
    try {
        const news = await News.findByPk(req.params.id);
        if (!news) return res.status(404).json({ error: "News not found" });

        await news.update(req.body);
        res.json(news);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete News
exports.deleteNews = async (req, res) => {
    try {
        const news = await News.findByPk(req.params.id);
        if (!news) return res.status(404).json({ error: "News not found" });

        await news.destroy();
        res.json({ message: "News deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
