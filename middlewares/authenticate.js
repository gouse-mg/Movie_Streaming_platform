import Users from "../models/user.js";
import jwt from "jsonwebtoken";
const secret_key = "Free Palestine"
async function AuthenticateTheUser(req, res, next) {
    const token = req.cookies?.user; 
    console.log(token)
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, secret_key);
        req.user = decoded; // attach decoded payload to req for later use
        next(); 
    } catch (err) {
        console.error("Invalid token:", err.message);
        return res.status(403).json({ error: "Invalid or expired token" });
    }
}

export default AuthenticateTheUser
