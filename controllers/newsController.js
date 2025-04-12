const { News } = require('../models');

// Create News
exports.createNews = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const image = req.file ? `${req.file.filename}` : null;

        const news = await News.create({
            title,
            description,
            date,
            image
        });

        res.status(201).json({ message: 'News created', news });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Get All News
exports.getAllNews = async (req, res) => {
    try {
        const news = await News.findAll({
            order: [['id', 'DESC']]
        });
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get Latest News
exports.getLatestNews = async (req, res) => {
    try {
        const latestNews = await News.findAll({
            limit: 2,
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json(latestNews);
    } catch (err) {
        res.status(500).json({ error: err.message });
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

        const { title,date,description } = req.body;
        const image = req.file ? `${req.file.filename}` : news.image; // fallback to old image if no new one uploaded
    
        await news.update({ title, image, date, description });
    
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
