import { Router } from 'express';
import userRoutes from './userRoutes.js';
import itemRoutes from './itemRoutes.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/items', authMiddleware, itemRoutes);
router.use('/weather', authMiddleware, async (req, res) => {
    let weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Izmir`);
    weather = await weather.json();
    res.json(weather);
});

export default router;
