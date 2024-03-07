import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = (req, res, next) => {
    const accessToken = req.header('Authorization');
    const refreshToken = req.cookies?.refreshToken;

    if (!accessToken && !refreshToken) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        //console.debug(error);
        console.log('Access token is expired, trying to refresh it...');
        if(!refreshToken) return res.status(401).json({ error: 'Invalid token' });

        jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY, (err, decoded) => {
            if (err) return res.status(401).json({ error: 'Invalid token' });
            const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
            res.header('Authorization', newAccessToken);
            req.user = decoded;
            next();
        });
    }
};