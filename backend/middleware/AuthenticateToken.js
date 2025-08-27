import jwt from "jsonwebtoken";

/**
 * Middleware to authenticate a user given a JWT token in the Authorization header.
 * If token is missing, send 401 Unauthorized. If token is invalid, send 403 Forbidden.
 * Otherwise, set req.user to the user object and call next() to continue the request.
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next middleware function
 */
export default function AuthenticateToken(req, res, next) {
     const authHeader = req.headers['authorization'];
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