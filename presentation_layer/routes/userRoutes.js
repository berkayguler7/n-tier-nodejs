import { Router } from 'express';
import { getAllUsers, createUser, loginUser } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.post('/signup', createUser);
router.post('/login', loginUser);

export default router;
