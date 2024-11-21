import PrinterDAO from "../daos/PrinterDAO.js";

// Get all printers
const getPrinters = async (req, res) => {
    try {
        const printers = await PrinterDAO.getPrinters(req.query);
        res.status(200).json(printers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createPrinter = async (req, res) => {
    try {
        await PrinterDAO.createPrinter(req.body);
        res.status(201).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updatePrinter = async (req, res) => {
    try {
        await PrinterDAO.updatePrinter(req.body, req.params.id);
        res.status(200).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deletePrinter = async (req, res) => {
    try {
        await PrinterDAO.deletePrinter(req.params.id);
        res.status(200).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getPrinters, createPrinter, updatePrinter, deletePrinter };