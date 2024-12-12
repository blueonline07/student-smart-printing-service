import { client } from "../config/db.js"

export default class OrderDAO {
  /*
   {
    "type": "AUTO" or "MANUAL", 
    "student": "email@asc.com",
    "printer": "1",
    "available_at": "2021-08-01T12:00:00",
  }
  */
  static async create(order){
    const query = 'INSERT INTO orders (type, student, printer, available_at) VALUES ($1, $2, $3, $4) RETURNING id';
    const values = [order.type, order.student, order.printer, order.available_at];
    try {
      const result = await client.query(query, values);
      return result.rows[0].id;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async getAll(params){
    const tempTable = `SELECT o.id, o.created_at, p.model as printer, o.type, o.student, o.available_at, o.status FROM orders o, printers p WHERE p.id = o.printer`;
    const query = `SELECT * FROM (${tempTable}) t WHERE (id = $1 OR $1 IS NULL) AND (type = $2 OR $2 IS NULL) AND (student = $3 OR $3 IS NULL) AND (printer = $4 OR $4 IS NULL) AND (available_at = $5 OR $5 IS NULL ) AND (status = $6 OR $6 IS NULL)`;
    const values = [params.id, params.type, params.student, params.printer, params.available_at, params.status];
    const filesQuery = 'SELECT file_name FROM print_details WHERE order_id = $1';

    try {
      const resp = await client.query(query, values);
      const orders = resp.rows;
      
      for (const order of orders) {
        const files = await client.query(filesQuery, [order.id]);
        order.files = files.rows.map(file => file.file_name);
      }
      console.log(orders);
      return orders;

    } catch (err) {
      return Promise.reject(err);
    }
  }
  static async update(updates, id) {
    const fields = [];
    const values = [id];
    let query = 'UPDATE orders SET ';

    Object.keys(updates).forEach((key, index) => {
      fields.push(`${key} = $${index + 2}`);
      values.push(updates[key]);
    });

    query += fields.join(', ') + ' WHERE id = $1';

    try {
      const resp = await client.query(query, values);
      return resp.rows[0];
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async delete(id) {
    const query = 'DELETE FROM orders WHERE id = $1';
    try {
      await client.query(query, [id]);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}