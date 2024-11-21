import express from 'express';
import {getUsers, createUser, updateUser} from '../controllers/UserController.js';



const router = express.Router();


router.get('/', getUsers);      // GET /users
router.post('/', createUser);   // POST /users
router.put('/', updateUser);     // PUT /users

export default router;
