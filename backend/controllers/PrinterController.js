import PrinterDAO from "../daos/PrinterDAO.js";

// Get all printers
export default class PrinterController {
    static async getPrinters(req, res) {
        try {
            const printers = await PrinterDAO.getAll(req.query);
            res.status(200).json(printers);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Create a new printer
    static async createPrinter(req, res) {
        try {
            await PrinterDAO.create(req.body);
            res.status(201).send('Printer created');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Update a printer
    static async updatePrinter(req, res) {
        try {
            await PrinterDAO.update(req.body, req.params.id);
            res.status(200).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Delete a printer
    static async deletePrinter(req, res) {
        try {
            await PrinterDAO.delete(req.params.id);
            res.status(200).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
