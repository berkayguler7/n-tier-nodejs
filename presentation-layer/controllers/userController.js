import userService from '../../business_logic_layer/services/userService.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export async function getAllUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function createUser(req, res) {
    const { name, email, password } = req.body;
    try {
        const hash = crypto.createHash('sha256');
        hash.update(password);
        const hashedPassword = hash.digest('hex');
        const newUser = await userService.createUser(name, email, hashedPassword);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const hash = crypto.createHash('sha256');
        hash.update(password);
        const hashedPassword = hash.digest('hex');
        const user = await userService.loginUser(email, hashedPassword);
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
        res.header('auth-token', token).json({ token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
