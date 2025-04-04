const { Quotation } = require('../models');

// Create Quotation
exports.createQuotation = async (req, res) => {
    try {
        const quotation = await Quotation.create(req.body);
        res.status(201).json(quotation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Quotations
exports.getAllQuotations = async (req, res) => {
    try {
        const quotations = await Quotation.findAll();
        res.json(quotations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Single Quotation by ID
exports.getQuotationById = async (req, res) => {
    try {
        const quotation = await Quotation.findByPk(req.params.id);
        if (!quotation) return res.status(404).json({ error: "Quotation not found" });
        res.json(quotation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Quotation
exports.updateQuotation = async (req, res) => {
    try {
        const quotation = await Quotation.findByPk(req.params.id);
        if (!quotation) return res.status(404).json({ error: "Quotation not found" });

        await quotation.update(req.body);
        res.json(quotation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Quotation
exports.deleteQuotation = async (req, res) => {
    try {
        const quotation = await Quotation.findByPk(req.params.id);
        if (!quotation) return res.status(404).json({ error: "Quotation not found" });

        await quotation.destroy();
        res.json({ message: "Quotation deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
