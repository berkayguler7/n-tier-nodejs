import { Router } from 'express';
import { getAllUsers, createUser, loginUser } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validateLogin, validateRegister } from '../middlewares/validators/authValidator.js';

const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.post('/register', validateRegister, createUser);
router.post('/login', validateLogin, loginUser);

export default router;
