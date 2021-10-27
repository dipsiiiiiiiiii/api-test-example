import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();

router.post('/signup', UserController.createUser);
router.get('/:id', UserController.getUserById);

export default router;
