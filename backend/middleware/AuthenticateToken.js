import jwt from "jsonwebtoken";

export default function AuthenticateToken(req, res, next) {
     const authHeader = req.defaults.headers.common['Authorization'];
     const token = authHeader && authHeader.split(' ')[1];
     if(!token) {
        return res.status(401).json({error: "Unauthorized, please log in"});
     }else{
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json({error: "Forbidden, please log in"});
            }else{
                req.user = user;
                next();
            }
        })
     }
}