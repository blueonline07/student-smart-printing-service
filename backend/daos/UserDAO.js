import { client } from "../config/db.js";

/*
{
  email : "admin@gans.com",
  name : "ABC",
}
{
  role : "student",
  email : "asd@gmail.com",
  name : "asd",
}
{
  role : "staff",
  email : "das@gmail.com",
  name : "das",
  workplace : "ansdnjsand ansdj "
*/

export default class UserDAO {
  static async create(user) {
    try {
      const query = "INSERT INTO users (email, name) VALUES ($1, $2)";
      const values = [user.email, user.name];
      await client.query(query, values);
    }
    catch (err) {
      return Promise.reject(err);
    }
    const role = user.role;
    try {
      if (role === "student") {
        const query = "INSERT INTO students (email, balance) VALUES ($1, $2)";
        const values = [user.email, 0];
        await client.query(query, values);
      } else if (role === "staff") {
        const query = "INSERT INTO staffs (email, workplace) VALUES ($1, $2)";
        const values = [user.email, user.workplace];
        await client.query(query, values);
      } else if (role !== undefined) {
        return Promise.reject(new Error("Invalid role"));
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }
  static async getAll(params) {

    const role = params.role;
    let query;
    let values;
    if (role === "student") {
      const studentTable =
        '(SELECT s.email, u.name, s.balance FROM students s INNER JOIN "users" u ON s.email = u.email)';

      query = `SELECT * FROM ${studentTable} as t WHERE (t.email = $1 OR $1 IS NULL) AND (t.name = $2 OR $2 IS NULL)`;
      values = [params.email, params.name];
    } else if (role === "staff") {
      const staffTable =
        '(SELECT s.email, u.name, s.workplace FROM staffs s INNER JOIN "users" u ON s.email = u.email)';
      query = `SELECT * FROM ${staffTable} as t WHERE (t.email = $1 OR $1 IS NULL) AND (t.name = $2 OR $2 IS NULL) AND (t.workplace = $3 OR $3 IS NULL)`;
      values = [params.email, params.name, params.workplace];
    } else {
      query =
        "SELECT * FROM users WHERE (email = $1 OR $1 IS NULL) AND (name = $2 OR $2 IS NULL)";
      values = [params.email, params.name];
    }
    try {
      const res = await client.query(query, values);
      return res.rows;
    } catch (err) {
      return Promise.reject(err);
    }
  }
  static async update(user, email) {
    const role = user.role;
    let query;
    let values;

    try {
      if (
        role === "student" &&
        user.balance !== undefined &&
        user.balance >= 0
      ) {
        query = "UPDATE students SET balance = $1 WHERE email = $2";
        values = [user.balance, email];
        await client.query(query, values);
      } else if (role === "staff" && user.workplace !== undefined) {
        query = "UPDATE staffs SET workplace = $1 WHERE email = $2";
        values = [user.workplace, email];
        await client.query(query, values);
      } else if (role !== undefined && role !== "student" && role !== "staff") {
        return Promise.reject(new Error("Invalid role"));
      }

      if (user.name !== undefined) {
        query = "UPDATE users SET name = $1 WHERE email = $2";
        values = [user.name, email];
        await client.query(query, values);
      }

      if (user.email !== undefined) {
        query = "UPDATE users SET email = $1 WHERE email = $2";
        values = [user.email, email];
        await client.query(query, values);
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async delete(email) {
    try {
      await client.query("DELETE FROM users WHERE email = $1", [email]);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
