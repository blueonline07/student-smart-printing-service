import e from 'express';
import UserDAO from '../models/User.js';

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await UserDAO.getAll(req.query);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new user
const createUser = async (req, res) => {
  try {
    const newUser = await UserDAO.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await UserDAO.update(req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export { getUsers, createUser, updateUser };    
