import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../dao/userdao.js';
import { isValidObjectId } from 'mongoose';

// @des     Get all users service
const getAllUsers = async () => {
    return await getUsers();
}

// @des     Get user by ID service
const getUser = async (id) => {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid user ID');
    }
    return await getUserById(id);
}

// @des     create new user service
const addUser = async (data) => {
    return await createUser(data);
}

// @des     Update user service
const updateUserById = async (id, data) => {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid user ID');
    }
    return await updateUser(id, data);
}

// @des     update user partially
const patchUser = async (id, data) => {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid user ID');
    }
    return await updateUser(id, data);
}

// @des     Delete user service
const deleteUserById = async (id) => {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid user ID');
    }
    return await deleteUser(id);
}

export { getAllUsers, getUser, addUser, updateUserById, deleteUserById, patchUser };