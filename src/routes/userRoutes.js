import express from 'express';
import {  getUsers, getUserById, createUser, updateUser, patchUser, deleteUser } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.route('/')
.get(protect,getUsers)
.post(createUser);

router.route('/:id')
.get(getUserById)
.put(protect,updateUser)
.patch(protect,patchUser)
.delete(protect,deleteUser);

export default router;
