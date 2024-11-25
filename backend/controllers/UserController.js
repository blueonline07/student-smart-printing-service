import UserDAO from '../daos/UserDAO.js';

// Get all users
export default class UserController {
  static async getUsers(req, res) {
    try {
      const users = await UserDAO.getAll(req.query);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Add a new user
  static async createUser(req, res) {
    try {
      const newUser = await UserDAO.create(req.body);
      res.status(201).send('User created');
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const updatedUser = await UserDAO.update(req.body, req.params.email);
      res.status(200).send('User updated');
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      await UserDAO.delete(req.params.email);
      res.status(200).send('User deleted');
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}
