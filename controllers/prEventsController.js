const { PrEvent } = require('../models');

// Create PR Event
exports.createPrEvent = async (req, res) => {
    try {
        const prEvent = await PrEvent.create(req.body);
        res.status(201).json(prEvent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All PR Events
exports.getAllPrEvents = async (req, res) => {
    try {
        const prEvents = await PrEvent.findAll();
        res.json(prEvents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Latest PrEvents
exports.getLatestPrEvents = async (req, res) => {
    try {
        const latestPrEvents = await PrEvent.findAll({
            limit: 4,
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json(latestPrEvents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Single PR Event by ID
exports.getPrEventById = async (req, res) => {
    try {
        const prEvent = await PrEvent.findByPk(req.params.id);
        if (!prEvent) return res.status(404).json({ error: "PR Event not found" });
        res.json(prEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update PR Event
exports.updatePrEvent = async (req, res) => {
    try {
        const prEvent = await PrEvent.findByPk(req.params.id);
        if (!prEvent) return res.status(404).json({ error: "PR Event not found" });

        await prEvent.update(req.body);
        res.json(prEvent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete PR Event
exports.deletePrEvent = async (req, res) => {
    try {
        const prEvent = await PrEvent.findByPk(req.params.id);
        if (!prEvent) return res.status(404).json({ error: "PR Event not found" });

        await prEvent.destroy();
        res.json({ message: "PR Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
