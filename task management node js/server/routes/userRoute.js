import express from 'express'; 
import { getCurrentUser, loginUser, registerUser, updatePassword, updateProfile } from '../controller/userController.js';
const userRouter = express.Router(); 

import authMiddleware from '../middleware/auth.js';


// public links 

userRouter.post('/register', registerUser); 
userRouter.post('/login', loginUser); 


// private links  protect also

userRouter.get('/me', authMiddleware, getCurrentUser)
userRouter.put('/profile', authMiddleware, updateProfile); 
userRouter.put('/password', authMiddleware, updatePassword); 

export default userRouter; 

