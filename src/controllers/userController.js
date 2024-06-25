import asyncHandler from "../middlewares/asyncHandler.js";
import {getAllUsers, getUser, addUser, updateUserById, deleteUserById } from '../services/userService.js';
import { userSchema,  putUserSchema, patchUserSchema} from '../dtos/userDto.js';
import generateToken from "../utils/generatesToken.js";


// @des     Get all users
// @route   GET /worko/user
const getUsers = asyncHandler(async (req, res) => { 
    const users = await getAllUsers();
    if(users){
        res.json(users);
    }
    else{
        res.status(404);
        throw new Error('Users not found');
    }
});

// @des     Get user by ID
// @route   GET /worko/user/:id
const getUserById = asyncHandler(async (req, res) => {
    const user = await getUser(req.params.id);
    if(user){
        res.json(user);
    }
    else{
        res.status(404);
        throw new Error('User not found');
    }
});

// @des     create new user
// @route   POST /worko/user
const createUser = asyncHandler(async (req, res) => {
    const { error } = userSchema.validate(req.body);
    if(error){
        res.status(400);
        throw new Error(error.details[0].message);
    }
    const user = await addUser(req.body);
    if(user){
        generateToken(res, user._id);
        res.status(201).json(user);
    }
    else{
        res.status(400);
        throw new Error('Error in creating user');
    }
});

// @des     Update user
// @route   PUT /worko/user/:id
const updateUser = asyncHandler(async (req, res) => {
    const { error } = putUserSchema.validate(req.body);
    if(error){
        res.status(400);
        throw new Error(error.details[0].message);
    }
    const user = await updateUserById(req.params.id, req.body);
    if(user){
        res.json(user);
    }
    else{
        res.status(400);
        throw new Error('Error in updating user');
    }
});

// @des     Patch user
// @route   PATCH /worko/user/:id
const patchUser = asyncHandler(async (req, res) => {
    const { error } = patchUserSchema.validate(req.body);
    if(error){
        res.status(400);
        throw new Error(error.details[0].message);
    }
    const user = await updateUserById(req.params.id, req.body);
    if(user){
        res.json(user);
    }
    else{
        res.status(400);
        throw new Error('Error in updating user');
    }
});

// @des     Soft delete user
// @route   DELETE /worko/user/:id
const deleteUser = asyncHandler(async (req, res) => {
    const userdelete = await deleteUserById(req.params.id);
    if(userdelete){
        res.json({message: 'User removed',date:userdelete});
    }
    else{
        res.status(400);
        throw new Error('Error in deleting user');
    }
});

export { getUsers, getUserById, createUser, updateUser, patchUser, deleteUser};