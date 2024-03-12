import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import weatherController from '../controllers/weatherController.js';

const router = Router();

router.get('/', authMiddleware, weatherController.getWeather);

export default router;
