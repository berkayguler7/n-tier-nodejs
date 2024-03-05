import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(400).json({ error: 'Invalid token' });
            }
            req.user = decoded;
            console.log(decoded);
        });
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};