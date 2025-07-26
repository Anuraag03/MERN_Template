import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import validate from '../middleware/validateRequest';
import { registerSchema, loginSchema } from '../validators/authValidator';

const router = express.Router();

router.post('/register', validate(registerSchema), registerUser);
router.post('/login', validate(loginSchema), loginUser);

export default router;