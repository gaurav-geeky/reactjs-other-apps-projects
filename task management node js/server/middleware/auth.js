import jwt from 'jsonwebtoken';
import User from '../model/userModel.js'

const JWT_SECRET = process.env.JWT_SECRET || "ur jwt secreat here";

export default async function authMiddleware(req, res, next) {
    // grab the bearer token from authrizatio header 

    const authHeader = req.header.authorization;
    if (!authHeader || !authHeader.startWith('Bearer ')) {
        return res.
            status(401).
            json({ success: false, message: "Not Authorized, token missing" });
    }

    const token = authHeader.split(' ')[1];

    // verify & attach user object 

    try {
        const payload = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(payload.id).select('-password');

        if (!user) {
            return res.status(401).json({ success: false, messge: "User not found..." });
        }

        req.user = user;
        next();
    }
    catch (err) {
        console.log("JWT verification failed", err);
        return res.status(401).json({ success: false, messge: "token invalid or expired " });
    }
}










