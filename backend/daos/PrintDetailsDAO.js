import {client} from '../config/db.js';

export default class PrintDetailsDAO {
  /*
  printdetail
    {
    "order_id": 1,
    "from_page": 1,
    "to_page": 10,
    "two_sided": true,
    "page_size": "A4",
    "quantity": "1",
    "file_name": "file.pdf",
    "file_path": "path/to/file.pdf"
    }
  */

  static async create(printDetail){
    console.log(printDetail);
    const query = 'INSERT INTO print_details (order_id, from_page, to_page, two_sided, page_size, quantity, file_name, file_path) \
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [printDetail.order_id,  printDetail.from_page, printDetail.to_page, printDetail.two_sided,
                    printDetail.page_size, printDetail.quantity,printDetail.file_name, printDetail.file_path];
    try {
      await client.query(query, values);
      console.log('Print detail created');
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async getFromOrderId(order_id){
    const query = 'SELECT * FROM print_details WHERE order_id = $1';
    const values = [order_id];
    try {
      const resp = await client.query(query, values);
      return resp.rows;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async update(printDetail, order_id, id){
    const fields = [];
    const values = [];
    let index = 1;

    if (printDetail.from_page !== undefined) {
      fields.push(`from_page = $${index++}`);
      values.push(printDetail.from_page);
    }
    if (printDetail.to_page !== undefined) {
      fields.push(`to_page = $${index++}`);
      values.push(printDetail.to_page);
    }
    if (printDetail.two_sided !== undefined) {
      fields.push(`two_sided = $${index++}`);
      values.push(printDetail.two_sided);
    }
    if (printDetail.page_size !== undefined) {
      fields.push(`page_size = $${index++}`);
      values.push(printDetail.page_size);
    }
    if (printDetail.quantity !== undefined) {
      fields.push(`quantity = $${index++}`);
      values.push(printDetail.quantity);
    }
    if (printDetail.file_name !== undefined) {
      fields.push(`file_name = $${index++}`);
      values.push(printDetail.file_name);
    }
    if (printDetail.file_path !== undefined) {
      fields.push(`file_path = $${index++}`);
      values.push(printDetail.file_path);
    }

    if (fields.length === 0) {
      return Promise.resolve(); // Nothing to update
    }

    const query = `UPDATE print_details SET ${fields.join(', ')} WHERE order_id = $${index} AND id = $${index + 1}`;
    values.push(order_id);
    values.push(id);

    try {
      await client.query(query, values);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async delete(order_id, id){
    const query = 'DELETE FROM print_details WHERE order_id = $1 AND id = $2';
    const values = [order_id, id];
    try {
      await client.query(query, values);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  
}