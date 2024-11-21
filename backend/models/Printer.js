import {client} from '../config/db.js';


export default class PrinterDAO {
    static async getAll(){
        const query = 'SELECT * FROM printers';
        try {
            const res = await client.query(query);
            return res.rows;
        }
        catch(err){
            console.error(err);
        }
    }
}