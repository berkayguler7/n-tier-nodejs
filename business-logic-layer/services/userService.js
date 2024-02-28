import User from '../../data_access_layer/models/userModel.js';

async function getAllUsers() {
    return await User.findAll({ attributes: { exclude: ['password'] } });
}

async function createUser(name, email, password) {
    return await User.create({ name, email, password });
}

async function loginUser(email, password) {
    return await User.findOne({ where: { email, password } });
}

export default { getAllUsers, createUser, loginUser };
