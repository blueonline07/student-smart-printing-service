import {client} from '../config/db.js';


export default class UserDAO {
    static async create(user){
        const role = user.role;
        let query;
        let values;
        if (role === 'student') {
            await client.query('INSERT INTO users (email, name) VALUES ($1, $2)', [user.email, user.name]);
            query = 'INSERT INTO students (email, balance) VALUES ($1, $2)';
            values = [user.email,  0];
        }
        else if (role === 'staff') {
            await client.query('INSERT INTO users (email, name) VALUES ($1, $2)', [user.email, user.name]);
            query = 'INSERT INTO staffs (email, workplace) VALUES ($1, $2)';
            values = [user.email, user.workplace];
        }
        try {
            await client.query(query, values);
        }
        catch(err){
            return Promise.reject(err);
        }
    }
    static async getAll(params){
        const role = params.role;
        let query;
        let values;
        if (role === 'student') {
            const studentTable = '(SELECT s.email, u.name, s.balance FROM students s INNER JOIN "users" u ON s.email = u.email)';

            query = `SELECT * FROM ${studentTable} as t WHERE (t.email = $1 OR $1 IS NULL) AND (t.name = $2 OR $2 IS NULL)`;
            values = [params.email, params.name];
        }
        else if (role === 'staff') {
            const staffTable = '(SELECT s.email, u.name, s.workplace FROM staffs s INNER JOIN "users" u ON s.email = u.email)';
            query = `SELECT * FROM ${staffTable} as t WHERE (t.email = $1 OR $1 IS NULL) AND (t.name = $2 OR $2 IS NULL) AND (t.workplace = $3 OR $3 IS NULL)`;
            values = [params.email, params.name, params.workplace];
        }
        else{
            query = 'SELECT * FROM users WHERE (email = $1 OR $1 IS NULL) AND (name = $2 OR $2 IS NULL)';
            values = [params.email, params.name];
        }
        try {
            const res = await client.query(query, values);
            return res.rows;
        }
        catch(err){
            return Promise.reject(err);
        }
    }
    static async update(user){
        const role = user.role;
        let query;
        let values;
        if (role === 'student') {
            query = 'UPDATE students SET balance = $1 WHERE email = $2';
            values = [user.balance, user.email];
        }
    }
}