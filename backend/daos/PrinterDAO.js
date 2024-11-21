import { client } from "../config/db.js";

/*
printer {
  id: int,
  brand: string,
  model: string,
  room: string,
  building: string,
  campus: string,
  status: string
}

printables {
  printer: int,
  printable: string
}
*/

export default class PrinterDAO {
  static async createPrinter(printer) {
    const query =
      "INSERT INTO printers (brand, model, room, building, campus, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";
    const values = [
      printer.brand,
      printer.model,
      printer.room,
      printer.building,
      printer.campus,
      true,
    ];

    try {
      const resp = await client.query(query, values);
      for (const printable of printer.printables) {
        await PrinterDAO.addPrintable(resp.rows[0].id, printable);
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async getPrinters(params) {
    const query =
      "SELECT * FROM printers WHERE (id = $1 OR $1 IS NULL)\
    AND (brand = $2 OR $2 IS NULL) AND (model = $3 OR $3 IS NULL)\
    AND (room = $4 OR $4 IS NULL) AND (building = $5 OR $5 IS NULL)\
    AND (campus = $6 OR $6 IS NULL) AND (status = $7 OR $7 IS NULL)";
    const values = [
      params.id,
      params.brand,
      params.model,
      params.room,
      params.building,
      params.campus,
      params.status,
    ];
    try {
      const res = await client.query(query, values);
      const printers = res.rows;
      for (const printer of printers) {
        printer.printables = await PrinterDAO.getPrintables(printer.id);
      }
      return printers;
    } catch (err) {
      return Promise.reject(err);
    }
  }
  static async getPrintables(printerId) {
    const query =
      "SELECT printer, printable FROM printables WHERE printer = $1";
    const values = [printerId];
    try {
      const res = await client.query(query, values);
      return res.rows.map((row) => row.printable);
    } catch (err) {
      console.log(err);
    }
  }

  static async addPrintable(printerId, printable) {
    const query = "INSERT INTO printables (printer, printable) VALUES ($1, $2)";
    const values = [printerId, printable];
    try {
      await client.query(query, values);
    } catch (err) {
      console.log(err);
    }
  }

  static async removePrintable(printerId, printable) {
    const query =
      "DELETE FROM printables WHERE printer = $1 AND printable = $2";
    const values = [printerId, printable];
    try {
      await client.query(query, values);
    } catch (err) {
      console.log(err);
    }
  }

  static async updatePrinter(printer, id) {
    const fields = [];
    const values = [];
    let index = 1;

    if (printer.room !== undefined) {
      fields.push(`room = $${index++}`);
      values.push(printer.room);
    }
    if (printer.building !== undefined) {
      fields.push(`building = $${index++}`);
      values.push(printer.building);
    }
    if (printer.campus !== undefined) {
      fields.push(`campus = $${index++}`);
      values.push(printer.campus);
    }
    if (printer.status !== undefined) {
      fields.push(`status = $${index++}`);
      values.push(printer.status);
    }

    if (fields.length === 0) {
      return Promise.resolve(); // No fields to update
    }

    const query = `UPDATE printers SET ${fields.join(
      ", "
    )} WHERE id = $${index}`;
    values.push(id);

    try {
      await client.query(query, values);
    } catch (err) {
      return Promise.reject(err);
    }
    const newPrintables = printer.newPrintables || [];
    const removePrintables = printer.removePrintables || [];
    for (const printable of removePrintables) {
      await PrinterDAO.removePrintable(id, printable);
    }
    for (const printable of newPrintables) {
      await PrinterDAO.addPrintable(id, printable);
    }
  }

  static async deletePrinter(printerId) {
    const query = "DELETE FROM printers WHERE id = $1";
    const values = [printerId];
    try {
      await client.query(query, values);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
