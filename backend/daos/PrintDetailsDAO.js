import {client} from '../config/db.js';

export default class PrintDetailsDAO {
  /*
  {
    "order_id": 1,
    "from_page": 1,
    "to_page": 3,
    "sides": "single",
    "page_size": "A4",
    "quantity": 1,
    "file_path": "file_path"
  }
  */

  static async create(printDetail){
    console.log(printDetail);
    const query = 'INSERT INTO print_details (order_id, id, from_page, to_page, sides, page_size, quantity, file_path) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [printDetail.order_id,printDetail.id, printDetail.from_page, printDetail.to_page,
                    printDetail.sides, printDetail.page_size, printDetail.quantity, printDetail.file_path];
    try {
      await client.query(query, values);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async getFromOrderId(order_id){
    const query = 'SELECT * FROM print_details WHERE order_id = $1';
    const values = [order_id];
    try {
      const resp = await client.query(query, values);
      return resp.rows[0];
    } catch (err) {
      return Promise.reject(err);
    }
  }
  
}