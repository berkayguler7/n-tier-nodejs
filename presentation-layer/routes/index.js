import { Router } from 'express';
import userRoutes from './userRoutes.js';
import itemRoutes from './itemRoutes.js';
import weatherRoutes from './weatherRoutes.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/items', authMiddleware, itemRoutes);
router.use('/weather', authMiddleware, weatherRoutes);

export default router;
