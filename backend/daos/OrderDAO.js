import { client } from "../config/db.js"

export default class OrderDAO {
  /*
   {
    "type": "instant" or "counter", 
    "student": "email@asc.com",
    "printer": "1",
    "available_at": "2021-08-01T12:00:00" // instant 
    "available_since": "2021-08-01T12:00:00" // counter
  }
  */
  static async create(order){
    const type = order.type;
    let query;
    let values;
    if (type === 'instant'){
      const resp = await client.query('INSERT INTO orders (student, printer) VALUES ($1, $2) RETURNING id', [
        order.student, order.printer
      ]);
      const order_id = resp.rows[0].id;

      query = 'INSERT INTO instantorders (id, available_at) VALUES ($1, $2)';
      values = [order_id, order.available_at];
    }
    else if (type === 'counter'){
      const resp = await client.query('INSERT INTO orders (student, status, printer) VALUES ($1, $2, $3) RETURNING id', [
        order.student, order.status, order.printer
      ]);
      const order_id = resp.rows[0].id;

      query = 'INSERT INTO counterorders (id, available_since) VALUES ($1, $2)';
      values = [order_id, order.available_since];
    }
    else {
      return Promise.reject('Invalid order type');
    }
    try {
      await client.query(query, values);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async getAll(params){
    const type = params.type;
    let query;
    let values;
    if (type === 'instant'){
      const instantTable = '(SELECT o.id, o.student, o.status, o.printer, i.available_at FROM orders o INNER JOIN instant_orders i ON o.id = i.id)';
      query = `SELECT * FROM ${instantTable} as t WHERE (t.id = $1 OR $1 IS NULL) AND (t.student = $2 OR $2 IS NULL) AND (t.status = $3 OR $3 IS NULL) AND (t.printer = $4 OR $4 IS NULL) AND (t.available_at = $5 OR $5 IS NULL)`;
      values = [params.id, params.student, params.status, params.printer, params.available_at];
    }
    else if (type === 'counter'){
      const counterTable = '(SELECT o.id, o.student, o.status, o.printer, c.available_since FROM orders o INNER JOIN counter_orders c ON o.id = c.id)';
      query = `SELECT * FROM ${counterTable} as t WHERE (t.id = $1 OR $1 IS NULL) AND (t.student = $2 OR $2 IS NULL) AND (t.status = $3 OR $3 IS NULL) AND (t.printer = $4 OR $4 IS NULL) AND (t.available_since = $5 OR $5 IS NULL)`;
      values = [params.id, params.student, params.status, params.printer, params.available_since];
    }
    else {
      query = 'SELECT * FROM orders WHERE (id = $1 OR $1 IS NULL) AND (student = $2 OR $2 IS NULL) AND (status = $3 OR $3 IS NULL) AND (printer = $4 OR $4 IS NULL)';
      values = [params.id, params.student, params.status, params.printer];
    }
    try {
      const resp = await client.query(query, values);
      return resp.rows;
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
}