import PrinterDAO from "../models/Printer.js";

// Get all printers
const getPrinters = async (req, res) => {
    try {
        const printers = await PrinterDAO.getAll();
        res.status(200).json(printers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch printers' });
    }
};

export { getPrinters };