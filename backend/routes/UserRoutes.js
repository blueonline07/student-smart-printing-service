import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();


router.get('/', UserController.getUsers);      // GET /users
router.post('/', UserController.createUser);   // POST /users
router.put('/:email', UserController.updateUser);     // PUT /users
router.delete('/:email', UserController.deleteUser);  // DELETE /users

export default router;
