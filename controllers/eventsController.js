const { Event } = require('../models');

// Create Event
exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll({
            order: [['date', 'DESC']]
        });
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get Latest Events
exports.getLatestEvents = async (req, res) => {
    try {
        const latestEvents = await Event.findAll({
            limit: 4,
            order: [['date', 'DESC']]
        });

        res.status(200).json(latestEvents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Event By Id
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).json({ error: "Event not found" });
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Event
exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).json({ error: "Event not found" });

        await event.update(req.body);
        res.json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).json({ error: "Event not found" });

        await event.destroy();
        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
