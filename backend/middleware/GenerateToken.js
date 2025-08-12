import jwt from "jsonwebtoken";

export default function GenerateToken(user) {
    return jwt.sign(user , process.env.ACCESS_TOKEN, { expiresIn: '1h' });
}
//require('crypto').randomBytes(64).toString('hex')