import User from "../models/userModel.js";


// get all users
const getUsers = async () => {
    return await User.find().where('isDeleted').equals(false);
  };

// get user by id
const getUserById = async (id) => {
    return await User.findById(id).where('isDeleted').equals(false);
}

// create new user
const createUser = async (data) => {
    return await User.create(data);
}

// update user
const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, {new: true});
}

// soft delete user
const deleteUser = async (id) => {
    return await User.findByIdAndUpdate(id, {isDeleted: true}, {new: true});
}

export { getUsers, getUserById, createUser, updateUser, deleteUser };