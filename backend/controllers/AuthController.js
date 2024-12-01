import UserDAO from '../daos/UserDAO.js';

export default class AuthController {
  static async login(req, res) {
    const {role, email} = req.body;
    const user = await UserDAO.getAll({
      email: email,
      role: role,
    });

    if (user.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    return res.json(user[0]);
  }
}
